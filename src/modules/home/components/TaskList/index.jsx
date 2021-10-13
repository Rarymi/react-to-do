import { TaskListContainer } from './style';

export default function TaskList({ tarefasState, setTarefasState }) {
  function alteraEstadoDaTarefa(tarefa) {
    const newArray = [...tarefasState];

    const foundIndex = newArray.findIndex((task) => tarefa.id === task.id);

    newArray[foundIndex] = {
      ...newArray[foundIndex],
      realizada: !tarefa.realizada,
    };

    setTarefasState(newArray);
  }

  return (
    <TaskListContainer>
      {tarefasState.map((tarefa) => (
        <div>
          <h1
            onClick={() => alteraEstadoDaTarefa(tarefa)}
            style={{ borderLeft: tarefa.realizada ? '6px solid  red' : '' }}
          >
            {tarefa.titulo}
            {JSON.stringify(tarefa)}
          </h1>
        </div>
      ))}
    </TaskListContainer>
  );
}
