/* Image Reducer
 * handles images states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
  isLoading: false,
  isError: false,
  text: '',
  open: false,
};

export const singleImageReducer = createReducer(initialState, {
  [types.SNACKBAR_OPEN](state, action) {
    return {
      ...state,
      text: action.text,
      open: true,
    };
  },
  [types.SNACKBAR_CLOSE](state) {
    return { 
        ...state, 
        isLoading: true, 
        text: '',
        open: false,
    };
  },
});
