import {SIDE_NAVIGATION} from './types'

export default function sideNavigationReducer (state, action) {
  switch (action.type) {
    case SIDE_NAVIGATION:
      return {
        ...state,
        collapse: action.payload.collapse,
      }
      default:
        return state
  }
}