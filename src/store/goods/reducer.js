import type from './type'
import { handleActions } from 'redux-actions'

const initialState = {
  count: 1
}

export default handleActions({
  [type.COUNT_PLUS] (state) {
    return {
      ...state,
      count: ++state.count
    }
  },
  [type.COUNT_MINUS] (state) {
    return {
      ...state,
      count: --state.count
    }
  }
}, initialState)
