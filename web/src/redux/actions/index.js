import { CONSOLE_TEST, CONSOLE_TEST_START } from '../types'
//mapPropsToState
export const select = (state) => {
  return {
    background: state?.rootReducer.background,
  }
}

//Action to change background
export const updateBackgroundStart = () => {
  return { type: CONSOLE_TEST_START }
}

export const updateBackground = () => {
  return { type: CONSOLE_TEST }
}
