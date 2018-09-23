import { flatMap, throttleTime } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import * as constants from '../constants'
import * as api from '../api'

export const fetchWeatherEpic = action$ => 
  action$.pipe(
    ofType(constants.FETCH_REQUEST),
    throttleTime(400),
    flatMap(async ({ payload: keyword }) => {
      let result
      
      try {
        const res = await Promise.all([
          api.currentWeatherRequest(keyword),
          api.weatherForecastRequest(keyword)
        ])

        result = {
          type: constants.FETCH_SUCCEED,
          payload: {
            currentWeather: res[0].data,
            weatherForecast: res[1].data
          }
        }
        
      } catch (err) {
        result = {
          type: constants.FETCH_FAILED,
          payload: err.response.data
        }
      }

      return result
    })
  )