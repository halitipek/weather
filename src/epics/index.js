import { combineEpics } from 'redux-observable'

import { fetchWeatherEpic } from './search-epics'

export default combineEpics(
  fetchWeatherEpic
)