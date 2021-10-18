import { TaskListContainer } from './style';
import TaskListItem from '../TaskListItem';
import TaskService from 'modules/home/services/TaskService';
import { TasksContext } from 'modules/shared/contexts/TasksContext';
import { useContext } from 'react';
import { FilterContext } from 'modules/shared/contexts/FilterContext';
export default function TaskList() {
  const { tasks, setTasks } = useContext(TasksContext);
  const { filter } = useContext(FilterContext);

  /**
   *
   * @param {object} taskReceived tarefa a ser alterada
   * @param {status} status status a ser aplicado na tarefa
   */
  async function changeTaskStatus(taskReceived, status) {
    /* cria a cópia da lista de tarefas, pois não podemos alterar
      diretamente a lista, pois ela é um estado (useState)
    */
    const currentTasks = [...tasks];

    //Procura pelo índice do elemento que estamos procurando (taskReceived)
    const foundIndex = currentTasks.findIndex((task) => {
      return taskReceived.id === task.id;
    });

    // Altera o elemento da lista cuja posição é a mesma do índice encontrado na
    //linha 19
    currentTasks[foundIndex] = {
      ...currentTasks[foundIndex],
      status,
    };

    //Atualiza o elemento encontrado no banco
    await TaskService.update(currentTasks[foundIndex]);

    //Altera o estado da lista atual com a lista com o elemento atualizado
    setTasks(currentTasks);
  }

  return (
    <TaskListContainer>
      <ul>
        {tasks.map((task) =>
          filter !== '' ? (
            task.status === filter && <TaskListItem key={task.id} task={task} changeTaskStatus={changeTaskStatus} />
          ) : (
            <TaskListItem key={task.id} task={task} changeTaskStatus={changeTaskStatus} />
          )
        )}
      </ul>
    </TaskListContainer>
  );
}
