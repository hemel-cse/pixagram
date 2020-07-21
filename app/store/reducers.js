/*
 * combines all th existing reducers
*/

import * as imagesReducer from 'app/features/image-grid/reducers';

export default Object.assign({}, imagesReducer);
