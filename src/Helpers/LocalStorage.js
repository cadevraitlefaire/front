export class LocalStorage {
  key = '';

  get() {
    return localStorage.getItem(this.key) || '';
  }

  set(value) {
    localStorage.setItem(this.key, value);
  }

  delete() {
    localStorage.removeItem(this.key);
  }
}
