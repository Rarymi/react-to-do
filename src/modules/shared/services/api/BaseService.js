import HttpClient from '../HttpClient';

export default class BaseService {
  constructor(baseHref) {
    this.baseHref = baseHref;
    this.httpClient = new HttpClient('https://amanda-react-to-do-backend.herokuapp.com/');
  }
}
