import {createContext, useReducer, useContext, Dispatch} from 'react'
import sideNavigationReducer from '@/Reducers/sideNavigation'

const initialize = {
  sideNavigation: {
    minimize: false,
  }
}

const initializeContext ={
  state: initialize,
  dispatch: () => null,
}

const AppContext = createContext(initializeContext)
AppContext.displayName = "AppContext"

const mainReducer = ({sideNavigation}, action) => ({
  sideNavigation: sideNavigationReducer(sideNavigation, action),
})

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(mainReducer, initialize)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

export default AppProvider