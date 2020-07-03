import { LocalStorage } from './LocalStorage';
import decode from 'jwt-decode';

export class Token extends LocalStorage {
  key = 'token';

  getDecoded() {
    return decode(this.get());
  }
}
