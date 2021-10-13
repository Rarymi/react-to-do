import { useState } from 'react';
import { TaskFormContainer } from './style';

export default function TaskForm({ setTarefasState, tarefasState }) {
  const [inputState, setInputState] = useState('');

  function onInputChange(event) {
    const valorAtualDoInput = event.target.value;
    setInputState(valorAtualDoInput);
  }

  function generateId() {
    return `TS-${parseInt(Math.random() * (999 - 1) + 1)}`;
  }

  async function adicionaItemNaLista() {
    if (inputState === '') return;
    setTarefasState([...tarefasState, { id: generateId(), titulo: inputState, detalhes: '', realizada: false }]);
    setInputState('');
  }

  return (
    <TaskFormContainer>
      <input type='text' value={inputState} onChange={onInputChange} />
      <button onClick={adicionaItemNaLista}>Adicionar</button>
    </TaskFormContainer>
  );
}
