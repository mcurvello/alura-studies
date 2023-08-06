import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  text: string;
}

export default function Button({ onClick, text, type = "button" }: Props) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {text}
    </button>
  );
}
