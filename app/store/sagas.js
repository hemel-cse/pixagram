/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';

import { imageSagas } from '../features/image-grid/sagas';

export default function* rootSaga() {
  yield all([...imageSagas]);
}
