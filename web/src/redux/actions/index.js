import {
  CONSOLE_TEST,
  CONSOLE_TEST_START,
  SET_SIDEBAROVERLAY,
  SET_SIDEBAROVERLAY_START,
  SET_SECONDLEVELMENU,
  SET_SECONDLEVELMENU_START,
} from '../types'
//mapPropsToState
export const select = (state) => {
  return {
    background: state?.rootReducer.background,
    sidebarOverlay: state?.rootReducer.sidebarOverlay,
    secondLevelMenu: state?.rootReducer.secondLevelMenu,
  }
}

//Action to change background
export const updateBackgroundStart = () => {
  return { type: CONSOLE_TEST_START }
}

export const updateBackground = () => {
  return { type: CONSOLE_TEST }
}

export const setSidebarOverlayStart = () => {
  console.log('setting background start')
  return { type: SET_SIDEBAROVERLAY_START }
}

export const setSidebarOverlay = () => {
  return { type: SET_SIDEBAROVERLAY }
}

export const setSecondLevelMenu = () => {
  return {
    type: SET_SECONDLEVELMENU_START,
  }
}
