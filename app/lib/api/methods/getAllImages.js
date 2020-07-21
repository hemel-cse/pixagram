import Api from 'app/lib/api';
import ApiConfig from '../ApiConfig';

export default function getAllImages(type) {
  
  return Api(
    ApiConfig.KEY_PARAM,
    null,
    'get',
    null,
  );
}