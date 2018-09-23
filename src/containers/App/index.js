import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'

import { fetchRequest, clearError } from '../../actions/search-actions'

import SearchBar from '../../components/SearchBar'
import Hero from '../../components/Hero'
import List from '../../components/List'

class App extends Component {
  state = {
    keyword: '',
    loading: false
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
    if (this.props.error) {
      this.props.clearError()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchRequest(this.state.keyword)
  }

  convertDataForList = ({ currentWeather, weatherForecast }) => {
    const list = weatherForecast.list
      .sort((a, b) => a.dt - b.dt)
      .map(period => ({
        icon: 'http://openweathermap.org/img/w/' + period.weather[0].icon + '.png',
        temp: period.main.temp,
        time: moment(period.dt * 1000).format('HH:mm'),
        day: moment(period.dt * 1000).format('dddd')
      }))
      
    return {
      currentWeather: {
        title: currentWeather.name,
        desc: currentWeather.weather[0].description,
        icon: 'http://openweathermap.org/img/w/' + currentWeather.weather[0].icon + '.png',
        temp: currentWeather.main.temp,
        time: moment(currentWeather.dt * 1000).calendar()
      },

      weatherForecast: {
        focusEnd: Math.floor((list.reduce((r, v, i, a, k = v.day) => ((r[k] || (r[k] = [])).push(v), r), {})[list[0].day].length) / (list.length) * 100) - 1,
        breakpoints: list.map(period => `${period.time}\n${period.day}`),
        series: list.reduce((acc, cur, i) => {
          if (i === 0) {
            acc[0] = {
              name: 'Average',
              type: 'line',
              symbolSize: 30,
              symbolOffset: [0, '-20%'],
              smooth: true,
              data: []
            }
          }

          acc[0].data.push({ value: cur.temp, symbol: `image://${cur.icon}` })

          return acc
        }, [])
      }
    }
  }

  render () {
    return (
      <React.Fragment>
        <SearchBar 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          keyword={this.state.keyword}
          loading={this.props.loading}
        />
        {
          this.props.error &&
          <Hero error={this.props.error.message} />
        }
        {
          this.props.data &&
          <List data={this.convertDataForList(this.props.data)} />
        }
      </React.Fragment>
    )
  }
}

App.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
  loading: PropTypes.bool,
  data: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ])
}

export default connect(
  ({ search: { loading, error, data }}) => ({ loading, error, data }),
  { fetchRequest, clearError }
)(App)
