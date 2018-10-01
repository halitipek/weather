import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react'

class ForecastChart extends Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)
  }

  getOption = () => {
    const { props } = this

    return {
      title: {
        text: props.title || ''
      },
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
      },
      xAxis: {
        type: 'category',
        data: props.data.breakpoints,
        axisTick: {
          alignWithLabel: true
        },
        splitLine : {
            show:false,
            interval : function(param) {
                return param % 1 === 0;
            }
        }
      },
      yAxis: {
        type: 'value',
        name: '℃',
        scale: true,
        splitLine: {
          show: false
        }
      },
      grid: {
        left: '1%',
        right: '3%',
        bottom: '15%',
        containLabel: true
      },
      dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: props.data.focusEnd
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: props.data.focusEnd
        },
      ],
      series: props.data.series
    }
  }

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{height: '350px', width: '100%'}}
        className='react_for_echarts' />
    )
  }
}

ForecastChart.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default ForecastChart
