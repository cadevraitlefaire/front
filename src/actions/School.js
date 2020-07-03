import { API } from './API';
import { SchoolSerializer } from './Serializer';

export class School extends API {
  endpoint = '/api/schools';
  serializer = new SchoolSerializer();
}
