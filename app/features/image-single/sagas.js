/* Redux saga class
 * requires text.
 * text - string
*/

import { put, delay, takeEvery } from 'redux-saga/effects';
import * as snackbarActions from './actions';
import * as types from './types';

// Our worker Saga that shows the snackbar async
export default function* showSnackBarAsync() {

  try {
    yield delay(3000)

    yield put(snackbarActions.closeSnackbar());

  } catch (error) {
    console.log(error)
  }
}


export const snackBarSagas = [takeEvery(types.SNACKBAR_OPEN, showSnackBarAsync)];
