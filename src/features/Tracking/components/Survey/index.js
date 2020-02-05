import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './Survey.module.scss'
import surveyQuestions from '../../constants/surveyQuestions.json'
import classnames from 'classnames'
import { submitTrackerSurveyData } from '../../redux/trackerActions'
import { PropTypes } from 'prop-types'

class Survey extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      selectedAnswerIndex: -1,
      hasSubmitted: false,
      savedAnswers: [],
      totalPoints: 0
    }
  }

  handleNextPress = () => {
    const { currentIndex, savedAnswers } = this.state
    console.log(savedAnswers)
    const { submitTrackerSurveyData } = this.props
    let total = 0
    if (currentIndex + 1 === surveyQuestions.length) {
      for (const q in savedAnswers) {
        console.log(savedAnswers[q].points)
        total += savedAnswers[q].points
      }
      console.log(total)
      savedAnswers.push(total)
      submitTrackerSurveyData(savedAnswers)
      console.log(savedAnswers)
      console.log("Questions Submitted!")
      this.setState({ hasSubmitted: true })
      return
    }
    this.setState({
      currentIndex: currentIndex + 1,
      selectedAnswerIndex: -1
    })
  }

  componentDidUpdate() {
    const { savedAnswers, selectedAnswerIndex, currentIndex } = this.state
    if (savedAnswers[currentIndex]) {
      if (selectedAnswerIndex !== savedAnswers[currentIndex].index) {
        this.setState({ selectedAnswerIndex: savedAnswers[currentIndex].index })
      }
    }
  }

  handleAnswerPress = (points, index, day) => {
    const { currentIndex } = this.state
    const savedAnswers = [...this.state.savedAnswers]
    savedAnswers[currentIndex] = { points, index, day }
    this.setState({ selectedAnswerIndex: index, savedAnswers })
  }

  render() {
    let date = new Date()
    let today = date.getDate()
    const { completedSurvey } = this.props

    const { currentIndex, selectedAnswerIndex, hasSubmitted } = this.state

    if (hasSubmitted) {
      return <h2 className={style['c-survey__title']}>Thank you for taking the Survey</h2>
    } else if (!completedSurvey) {
      return (
        <div className={style['c-survey']}>
          <h2 className={style['c-survey__title']}>Survey</h2>
          <h3 className={style['c-survey__subtitle']}>{`${currentIndex + 1}. ${surveyQuestions[currentIndex].question}`}</h3>
          <div className={style['c-survey__answers']}>
            {
              surveyQuestions[currentIndex].answers.map((answer, index) => (
                <div
                  onClick={() => this.handleAnswerPress(answer.points, index, today)}
                  key={answer.text}
                  className={classnames(style['c-survey__answers__answer'],
                    selectedAnswerIndex === index ? style['c-survey__answers__answer--selected'] : '')}
                >
                  <p>{answer.text}</p>
                </div>
              ))
            }
          </div>
          <div className={style['c-survey__buttons']}>
            <button
              onClick={() => this.setState({ currentIndex: currentIndex - 1 })}
              disabled={currentIndex === 0}
              className={style['c-survey__buttons__button']}
            >
              Previous
            </button>
            <button
              disabled={selectedAnswerIndex === -1}
              className={style['c-survey__buttons__button']}
              onClick={this.handleNextPress}
            >
              {currentIndex + 1 === surveyQuestions.length ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      )
    } else return null
  }
}

Survey.propTypes = {
  completedSurvey: PropTypes.bool,
  submitTrackerSurveyData: PropTypes.func
}

const mapStateToProps = ({ tracker }) => {
  const { completedSurvey } = tracker

  return { completedSurvey }
}

export default connect(mapStateToProps, { submitTrackerSurveyData })(Survey)