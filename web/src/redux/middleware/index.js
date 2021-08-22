import {
  takeEvery,
  fork,
  call,
  put,
  delay,
  spawn,
  all,
  take,
} from 'redux-saga/effects'
import { updateBackground } from '../actions'
import {
  CONSOLE_TEST_START,
  SINGNIN_HOVER,
  SET_SIDEBAROVERLAY,
  SET_SIDEBAROVERLAY_START,
} from '../types'

export function* consoleTestWatcher() {
  yield takeEvery(CONSOLE_TEST_START, consoleTestWorker)
}

function* consoleTestWorker() {
  try {
    // const { payload } = action
    yield put(updateBackground())
  } catch (error) {
    console.log(error)
  }
}

export function* sidebarOverlayWatcher() {
  yield takeEvery(SET_SIDEBAROVERLAY_START, sidebarOverlayWorker)
}

function* sidebarOverlayWorker() {
  try {
    //too lazy to write another action function, so i decide to use IIFE
    yield put(
      (() => {
        return { type: SET_SIDEBAROVERLAY }
      })()
    )
  } catch (error) {
    console.log(error)
  }
}

export function* rootSaga() {
  const sagas = [consoleTestWatcher, sidebarOverlayWatcher]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
