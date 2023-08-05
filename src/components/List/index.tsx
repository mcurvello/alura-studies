import style from "./List.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} tarefa={tarefa.nome} tempo={tarefa.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
