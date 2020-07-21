/*
 * Reducer actions related with images
 */
import * as types from './types';

export const requestImage = (type) => {
  return {
    type: types.IMAGES_REQUEST,
    type
  };
}

export const requestFailed = () => {
  return {
    type: types.IMAGES_FAILED,
  };
}

export const onImagesResponse = (type, response) => {
  return {
    type: types.IMAGES_RESPONSE,
    type,
    response,
  };
}

export const enableLoader = () => {
  return {
    type: types.IMAGES_ENABLE_LOADER,
  };
}

export const disableLoader = () => {
  return {
    type: types.IMAGES_DISABLE_LOADER,
  };
}
