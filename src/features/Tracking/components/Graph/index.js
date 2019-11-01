import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './Graph.module.scss'
import { getSurveyData } from '../../redux/trackerActions'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
 
class Graph extends Component {

  componentDidMount() {
    const { getSurveyData } = this.props
    getSurveyData()
  }

  render() {
    const { graphData } = this.props
    if (graphData) {
      return (
        <div style={{ height: '25rem', width: '15rem'}}>
          <ResponsiveScatterPlot
            data={graphData}
          />
        </div>
      )
    } else 
    return <h2>Not enough data to display graph</h2>
  }
}

const mapStateToProps = ({ tracker }) => {
  const { graphData } = tracker
  return { graphData }
}

export default connect(mapStateToProps, { getSurveyData })(Graph)