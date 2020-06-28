import { API } from './API';

export class User extends API {
  endpoint = '/users';

  login(data) {
    this.endpoint = '/authentication_token';
    return this.postRequest({ data });
  }
}
