import Api from 'app/lib/api';
import ApiConfig from '../ApiConfig';

export default function getAllImages(name, query) {
  let path;
  if(name === 'images') path = ApiConfig.KEY_PARAM+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  if(name === 'imagesEditor') path = ApiConfig.KEY_PARAM+ApiConfig.EDITORS+"true"+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  if(name === 'imagesSearch') path = ApiConfig.KEY_PARAM+ApiConfig.QUERY+query+ApiConfig.PER_PAGE+"200"+ApiConfig.IMAGE_TYPE;
  return Api(
    path,
    null,
    'get',
    null,
  );
}
