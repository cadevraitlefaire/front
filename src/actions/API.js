import { Token } from '../helpers/Token';
import * as axios from 'axios';
import { Username } from '../helpers/Username';

const getHeaders = () => {
  const h = {
    Accept: 'application/ld+json',
    'Content-Type': 'application/ld+json'
  };
  if (new Token().get()) {
    h['Authorization'] = `Bearer ${new Token().get()}`;
  }

  return h;
};

export class API {
  endpoint = '';
  filters = {};
  serializer = null;

  request() {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_ENTRYPOINT,
      headers: getHeaders()
    });
    instance.interceptors.response.use(
      r => r,
      error => {
        if (401 === error.response.status) {
          new Username().delete();
          new Token().delete();
          window.location.pathname = '/login';
        } else {
          return Promise.reject(error)
        }
      }
    );
    return instance;
  }

  async deleteRequest({endpoint}) {
    return this.request().delete(`${this.endpoint}${endpoint || ''}`);
  }

  async getRequest({endpoint = ''} = {endpoint: ''}) {
    return this.request().get(
      `${this.endpoint}${endpoint}${new URLSearchParams({
        ...this.pagination,
        ...this.filter
      }).toString() || ''}`
    );
  }

  async patchRequest({data, endpoint = ''} = {data: {}, endpoint: ''}) {
    return this.request().patch(
      `${this.endpoint}${endpoint}`,
      JSON.stringify(data),
      {
        headers: {
          ...getHeaders(),
          'Content-Type': 'application/merge-patch+json'
        }
      }
    );
  }

  async postRequest({config = {}, data, endpoint = ''} = {config: {}, data: {}, endpoint: ''}) {
    return this.request().post(`${this.endpoint}${endpoint}`, data, config);
  }

  async putRequest({data, endpoint} = {data: {}, endpoint: ''}) {
    return this.request().put(
      `${this.endpoint}${endpoint || ''}`,
      JSON.stringify(data)
    );
  }

  async getMany() {
    return this
      .getRequest()
      .then(({ data: {['hydra:member']: items} }) => items)
      .catch(console.log)
  }

  async getOne({id}) {
    return this
      .getRequest({endpoint: `/${id}`})
      .then(({ data }) => data)
  }
}
