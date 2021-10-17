import HttpClient from '../HttpClient';

export default class BaseService {
  constructor(baseHref) {
    this.baseHref = baseHref;
    this.httpClient = new HttpClient('http://localhost:8000/');
  }
}
