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
import { CONSOLE_TEST_START, SINGNIN_HOVER } from '../types'

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

export function* rootSaga() {
  const sagas = [consoleTestWatcher]

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
