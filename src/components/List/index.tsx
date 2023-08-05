import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

function List() {
  const tarefas = [
    {
      id: 1,
      nome: "React",
      tempo: "02:00:00",
    },
    {
      id: 2,
      nome: "JavaScript",
      tempo: "01:00:00",
    },
    {
      id: 3,
      nome: "HTML",
      tempo: "00:30:00",
    },
    {
      id: 4,
      nome: "CSS",
      tempo: "00:30:00",
    },
    {
      id: 5,
      nome: "TypeScript",
      tempo: "03:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} tarefa={tarefa.nome} tempo={tarefa.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
