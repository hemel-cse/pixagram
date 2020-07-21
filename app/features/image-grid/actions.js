/*
 * Reducer actions related with images
 */
import * as types from './types';

export const requestImages = (type, query) => {
  return {
    type: types.IMAGES_REQUEST,
    type,
    query
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

export const imageSaveRequest = (item) => {
  return {
    type: types.IMAGES_SAVE_REQUEST,
    item
  };
}
