import React from 'react'
import PropTypes from 'prop-types'

const CurrentWeatherCard = (props) => {
  const { icon, desc, temp, time } = props.data
  
  return (
    <div className="columns">
      <div className="column is-narrow is-marginless has-text-centered-mobile">
        <div className="has-text-grey is-size-4 is-capitalized">
          <figure className="image is-48x48 is-inline-block" style={{marginLeft: '-5%', height: 30}}>
            <img src={icon} alt={desc}/>
          </figure>
          {desc}
        </div>
        <div className="has-text-grey-light">{time}</div>
      </div>

      <div className="column is-narrow is-marginless">
        <h2 className="is-size-1 has-text-centered-mobile">
          {temp}
          <span className="is-size-5" style={{height: '100%', verticalAlign: 'top'}}>&#8451;</span>
        </h2>
      </div>
    </div>
  )
}

CurrentWeatherCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default CurrentWeatherCard
