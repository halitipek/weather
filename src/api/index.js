import axios from 'axios'

const BASE_URL = 'http://api.openweathermap.org/data/2.5'
const APP_ID = '87581089b5e409668757570295c88e95'

export const currentWeatherRequest = (city, units = 'metric') => {
  return axios(`${BASE_URL}/weather?q=${city.trim()}&units=${units}&appid=${APP_ID}`)
}

export const weatherForecastRequest = (city, units = 'metric') => {
  return axios(`${BASE_URL}/forecast?q=${city.trim()}&units=${units}&appid=${APP_ID}`)
}