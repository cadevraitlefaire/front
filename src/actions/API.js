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

  request() {
    return axios.create({
      baseURL: process.env.REACT_APP_API_ENTRYPOINT,
      headers: getHeaders()
    });
  }

  async deleteRequest({endpoint}) {
    return this.request().delete(`${this.endpoint}${endpoint || ''}`);
  }

  async getRequest({endpoint = ''}) {
    return this.request().get(
      `${this.endpoint}${endpoint}${new URLSearchParams({
        ...this.pagination,
        ...this.filter
      }).toString() || ''}`
    );
  }

  async patchRequest({data, endpoint = ''}) {
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

  async postRequest({config = {}, data, endpoint = ''}) {
    return this.request().post(`${this.endpoint}${endpoint}`, data, config);
  }

  async putRequest({data, endpoint}) {
    return this.request().put(
      `${this.endpoint}${endpoint || ''}`,
      JSON.stringify(data)
    );
  }
}
