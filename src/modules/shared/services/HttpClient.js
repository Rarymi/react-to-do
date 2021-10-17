import axios from 'axios';

export default class HttpClient {
  constructor(baseUrl) {
    const service = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.service = service;
  }
}
