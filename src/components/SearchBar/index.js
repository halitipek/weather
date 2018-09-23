import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SearchBar = ({ handleChange, handleSubmit, keyword, loading }) => {
  let controlClass = classNames({
    'control': true,
    'is-loading': loading,
    'is-expanded': true
  })

  return (
    <div className="columns is-mobile is-centered is-marginless" style={{padding: '1rem', backgroundColor: '#00d1b2', marginBottom: '15px'}}>
      <div className="column is-half-desktop is-four-fifths-tablet">
        <div className="field ">
          <div className={controlClass}>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={keyword}
                className="input is-rounded"
                type="text"
                placeholder="Search..." />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchBar.defaultProps = {
  loading: false
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  loading: PropTypes.bool
}

export default SearchBar
