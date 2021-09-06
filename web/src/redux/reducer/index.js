import {
  CONSOLE_TEST,
  SINGNIN_HOVER,
  SET_SIDEBAROVERLAY,
  SET_SECONDLEVELMENU,
} from '../types'

const initialState = {
  placeholder: null,
  background: 'dark',
  signInHover: false,
  sidebarOverlay: false,
  secondLevelMenu: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSOLE_TEST:
      console.log('console_test started')
      return {
        ...state,
        background: state.background === 'dark' ? 'light' : 'dark',
      }
    case SET_SIDEBAROVERLAY:
      return {
        ...state,
        sidebarOverlay: state.sidebarOverlay === true ? false : true,
      }
    case SET_SECONDLEVELMENU:
      return {
        ...state,
        secondLevelMenu: state.secondLevelMenu === true ? false : true,
      }
    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
