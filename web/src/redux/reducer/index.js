import { CONSOLE_TEST } from '../types'

const initialState = {
  placeholder: null,
  background: 'dark',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSOLE_TEST:
      console.log('console_test started')
      return {
        ...state,
        background: state.background === 'dark' ? 'light' : 'dark',
      }
    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
