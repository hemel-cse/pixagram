import Api from 'app/lib/api';
import ApiConfig from '../ApiConfig';

export default function getAllImages(type, query) {
  let path;
  if(type === 'images') path = ApiConfig.KEY_PARAM+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  if(type === 'imagesEditor') path = ApiConfig.KEY_PARAM+ApiConfig.EDITORS+"true"+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  if(type === 'imagesSearch') path = ApiConfig.KEY_PARAM+ApiConfig.QUERY+query+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  return Api(
    path,
    null,
    'get',
    null,
  );
}
