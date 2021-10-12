import { useState } from 'react';
import { AddTaskContainer } from './style';

export default function AddTask({ setTarefasState, tarefasState }) {
  const [inputState, setInputState] = useState('');

  function onInputChange(event) {
    setInputState(event.target.value);
  }

  async function adicionaItemNaLista() {
    setTarefasState([...tarefasState, { id: tarefasState.length, titulo: inputState, detalhes: '', realizada: false }]);

    setInputState('');
  }

  return (
    <AddTaskContainer>
      <input type='text' value={inputState} onChange={onInputChange}></input>
      <button onClick={adicionaItemNaLista}>Adicionar</button>

      <img src='../../images/undraw_Up_to_date_re_nqid.svg' alt='' />
    </AddTaskContainer>
  );
}
