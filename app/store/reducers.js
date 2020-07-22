/*
 * combines all th existing reducers
*/

import * as imagesReducer from 'app/features/image-grid/reducers';
import * as singleImageReducer from 'app/features/image-single/reducers';

export default Object.assign({}, imagesReducer, singleImageReducer);

