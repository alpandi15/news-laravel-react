import {SIDE_NAVIGATION} from './types'

export default function sideNavigationReducer (state, action) {
  switch (action.type) {
    case SIDE_NAVIGATION:
      return {
        ...state,
        minimize: action.payload.minimize,
      }
      default:
        return state
  }
}