import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './Graph.module.scss'
import { getSurveyData } from '../../redux/trackerActions'
import { ResponsiveLine } from '@nivo/line'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    const { getSurveyData } = this.props

    try {
      const dataToStore = await getSurveyData()
      this.setState({ data: dataToStore })
      console.log(this.state.data)
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    const graphData = this.state.data
    console.log(this.state.data)

    if (graphData === null) {
      return (
        <div style={{ height: '25rem', width: '15rem' }}>
        </div>
      )
    } else
      return (
        <div style={{ height: '500px', width: '750px' }}>
          {/* <ResponsiveLine
            data={graphData}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: 'linear', min: 1, max: 31 }}
            xFormat={function (e) { return e + " pts" }}
            yScale={{ type: 'linear', min: 0, max: 21 }}
            yFormat={function (e) { return e + "" }}
            blendMode='multiply'
            width={750}
            height={500}
            nodeSize={16}
            colors={{ scheme: 'dark2' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Day of Month',
              legendPosition: 'middle',
              legendOffset: 46
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Points',
              legendPosition: 'middle',
              legendOffset: -60
            }}
            
          /> */}




          <ResponsiveLine
            data={graphData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point', min: '1', max: '31', stacked: true, reverse: false }}
            xFormat={function(e){return "Day of Month: " + e}}
            yScale={{ type: 'linear' }}
            yFormat={function(e){return "Score: " + e}}
            axisTop={null}
            axisRight={null}
            width={750}
            height={500}
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
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />


        </div>
      )
  }
}

const mapStateToProps = ({ tracker }) => {
  const { graphData } = tracker
  return { graphData }
}

export default connect(mapStateToProps, { getSurveyData })(Graph)