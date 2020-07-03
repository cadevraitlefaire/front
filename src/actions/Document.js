import { API } from './API';
import { DocumentSerializer, SchoolSerializer } from './Serializer';

export class Document extends API {
  endpoint = '/api/documents';
  serializer = new DocumentSerializer();
}
