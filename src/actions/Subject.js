import { API } from './API';
import { SchoolSerializer } from './Serializer';

export class Subject extends API {
  endpoint = '/api/subjects';
  serializer = new SchoolSerializer();
}
