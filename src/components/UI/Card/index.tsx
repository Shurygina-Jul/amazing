import clsx from "clsx";
import Button from "../Button";

function Card(props: any) {
  const { message, button } = props;

  return (
    <article className={clsx("min-h-[200px] max-w-[160px] rounded-lg bg-smoke p-3")}>
      <h5>Название: {message?.text}</h5>
      <p>Дата создания: {message?.date}</p>
      <p> Описание: {message?.description}</p>

      <Button text={button?.name} onClick={button?.onClick} disabled={button?.disabled} />
    </article>
  );
}

export default Card;
