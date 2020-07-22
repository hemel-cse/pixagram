/*
 * Reducer actions related with images
 */
import * as types from './types';

export const openSnackbar = (text) => {
  return {
    type: types.SNACKBAR_OPEN,
    text,
  };
}

export const closeSnackbar = () => {
  return {
    type: types.SNACKBAR_CLOSE,
  };
}

