import React from 'react'
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react'

const ForecastChart = (props) => {
  const option = {
    title: {
      text: props.title || ''
    },
    legend: {
      show: false
    },
    xAxis: {
      type: 'category',
      data: props.data.breakpoints,
      axisTick: {
        alignWithLabel: true
      },
      splitLine : {
          show:true,
          interval : function(param) {
              return param % 1 === 0;
          }
      }
    },
    yAxis: {
      type: 'value',
      name: '℃',
      scale: true
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

  return (
    <ReactEcharts
      option={option}
      style={{height: '350px', width: '100%'}}
      className='react_for_echarts' />
  )
}

ForecastChart.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default ForecastChart
