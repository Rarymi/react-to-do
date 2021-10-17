import BaseService from 'modules/shared/services/api/BaseService';

class TaskService extends BaseService {
  constructor() {
    super('/tarefas');
  }

  getAll() {
    return this.httpClient.service.get(this.baseHref);
  }

  update(task) {
    return this.httpClient.service.put(`${this.baseHref}/${task.id}`, task);
  }

  create(task) {
    return this.httpClient.service.post(this.baseHref, task);
  }
}

export default new TaskService();
