import React from 'react'
import PropTypes from 'prop-types'

import CurrentWeather from './CurrentWeather'
import ForecastChart from './ForecastChart'

const List = (props) => {
  const { currentWeather, weatherForecast } = props.data
  
  return (
    <section className="section">
      <div className="columns is-mobile is-centered is-marginless">
        <div className="column is-half-desktop is-four-fifths-tablet">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                {currentWeather.title}
              </div>
            </div>
            <div className="card-content">
              <CurrentWeather data={currentWeather} />
              <ForecastChart data={weatherForecast} title="5 Days Forecast"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

List.propTypes = {
  data: PropTypes.object.isRequired
}

export default List
