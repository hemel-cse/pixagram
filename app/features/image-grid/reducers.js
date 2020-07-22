/* Image Reducer
 * handles images states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
  isLoading: false,
  isError: false,
  images: [],
  imagesEditor: [],
  imagesSearch: [],
  imagesSaved: [],
  name: '',
};

export const imagesReducer = createReducer(initialState, {
  [types.IMAGES_REQUEST](state, action) {
    return {
      ...state,
      name: action.name
    };
  },
  [types.IMAGES_ENABLE_LOADER](state) {
    return { 
        ...state, 
        isLoading: true, 
    };
  },
  [types.IMAGES_RESPONSE](state, action) {
    return {
      ...state,
      isError: false,
      isLoading: false,
      [action.name]: action.response,
    };
  },
  [types.IMAGES_FAILED](state) {
    return {
      ...state,
      isError: true,
      isLoading: false,
    };
  },
  [types.IMAGES_DISABLE_LOADER](state) {
    return {
      ...state,
      isLoading: false,
    };
  },
  [types.IMAGES_SAVE_REQUEST](state, action) {
    return {
      ...state,
      imagesSaved: [...state.imagesSaved, action.item]
    };
  },
});
