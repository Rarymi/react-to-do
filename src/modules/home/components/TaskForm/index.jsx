import { useState } from 'react';
import { TaskFormContainer } from './style';

export default function TaskForm({ setTarefasState, tarefasState }) {
  const [inputState, setInputState] = useState('');

  function onInputChange(event) {
    setInputState(event.target.value);
  }

  async function adicionaItemNaLista() {
    setTarefasState([...tarefasState, { id: tarefasState.length, titulo: inputState, detalhes: '', realizada: false }]);

    setInputState('');
  }

  return (
    <TaskFormContainer>
      <input type='text' value={inputState} onChange={onInputChange}></input>
      <button onClick={adicionaItemNaLista}>Adicionar</button>
    </TaskFormContainer>
  );
}
