/* Redux saga class
 * requires type.
 * type - 'images'
*/

import { put, call } from 'redux-saga/effects';
import getAllImages from 'app/lib/api/methods/getAllImages';
import * as imagesActions from '../actions';

// Our worker Saga that get all images
export default function* getImagesAsync(action) {

  yield put(imagesActions.enableLoader());

  try {
    const response = yield call(
        getAllImages,
        action.name,
        action.query,
    );

    if (response?.hits) {
      yield put(imagesActions.onImagesResponse(action.name, response?.hits));
      yield put(imagesActions.disableLoader());
  
    } else {
      yield put(imagesActions.requestFailed());
      yield put(imagesActions.disableLoader());
    }
  } catch (error) {
    console.log(error)
    yield put(imagesActions.requestFailed());
    yield put(imagesActions.disableLoader());
  }
}
    