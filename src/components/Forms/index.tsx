import React from "react";
import Button from "../Button";
import "./style.scss";

class Forms extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            id="tempo"
            name="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Forms;
