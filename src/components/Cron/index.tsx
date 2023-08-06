import React, { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Cron.module.scss";
import { ITarefa } from "../../types/tarefa";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cron({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>
      <Button text="Iniciar" />
    </div>
  );
}
