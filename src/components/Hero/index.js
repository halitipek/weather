import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ error }) => {
  return (
    <section className="hero is-danger">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { error }
          </h1>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  error: PropTypes.string.isRequired
}

export default Hero