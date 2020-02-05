import React, { Component } from 'react'
import { connect } from 'react-redux'
// import style from './Graph.module.scss'
import { getSurveyData } from '../../redux/trackerActions'
import { ResponsiveLine } from '@nivo/line'
import { PropTypes } from 'prop-types'
import { css } from "@emotion/core"
import RingLoader from "react-spinners/RingLoader"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
`

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setData()
  }

  async setData() {
    const { getSurveyData } = this.props

    try {
      const dataToStore = await getSurveyData()
      this.setState({ data: dataToStore })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    function printGraph() {
      let restorepage = document.body.innerHTML
      let printArea = document.getElementById('graph').innerHTML
      document.body.innerHTML = printArea
      window.print()
      document.body.innerHTML = restorepage
    }

    let graphData = this.state.data

    if (graphData === null) {
      return (
        <div style={{ height: '25rem', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginBottom: '40px' }}>Please wait while your data loads....</h2>
          <RingLoader
            css={override}
            size={75}
            color={"#6699CC"}
            loading={this.props.loadingData}
          />
        </div>
      )
    } else {
      return (
        <div id='graph' style={{ height: '450px', width: '700px' }}>

          {/* <ResponsiveLine
            data={graphData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point', min: '1', max: '31', stacked: true, reverse: false }}
            xFormat={function (e) { return "Day of Month: " + e }}
            yScale={{ type: 'linear' }}
            yFormat={function (e) { return "Score: " + e }}
            axisTop={null}
            axisRight={null}
            width={750}
            height={450}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Day of Month',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Score',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            lineWidth={3}
            colors='#6699CC'
            borderColor='#6699CC'
            pointSize={15}
            pointColor='#f4eee1'
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel='y'
            pointLabelYOffset={-12}
            useMesh={true}
          /> */}
          <button onClick={printGraph}>Print Page</button>

          {
            this.state.data.map((data) => (
              console.log("hello")
            ))
          }
        </div>
      )
    }
  }
}

Graph.propTypes = {
  getSurveyData: PropTypes.func,
  loadingData: PropTypes.bool
}

const mapStateToProps = ({ tracker }) => {
  const { loadingData } = tracker
  return { loadingData }
}

export default connect(mapStateToProps, { getSurveyData })(Graph)