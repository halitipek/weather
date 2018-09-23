import * as constants from '../constants'

export const fetchRequest = (keyword) => ({
  type: constants.FETCH_REQUEST,
  payload: keyword
})

export const clearError = () => ({
  type: constants.CLEAR_ERROR
})