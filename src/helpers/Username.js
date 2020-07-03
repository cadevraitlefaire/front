import { Token } from './Token';

export class Username extends Token {
  key = 'username';

  set() {
    super.set(new Token().getDecoded().username);
  }
}
