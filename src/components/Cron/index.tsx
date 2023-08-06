import React, { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Cron.module.scss";
import { ITarefa } from "../../types/tarefa";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Cron({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>
      <Button text="Iniciar" onClick={() => regressiva(tempo)} />
    </div>
  );
}
