import * as constants from '../constants'

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case constants.FETCH_REQUEST:
      return { ...INITIAL_STATE, loading: true }

    case constants.FETCH_SUCCEED:
      return { ...INITIAL_STATE, data: payload }

    case constants.FETCH_FAILED:
      return { ...INITIAL_STATE, error: payload }

    case constants.CLEAR_ERROR:
      return { ...state, error: null }

    default:
      return state
  }
}