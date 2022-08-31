import clsx from "clsx";

function Card(props: any) {
  const { task } = props;

  const type = task?.type?.value;

  return (
    <article
      className={clsx("min-h-[200px] max-w-[160px] rounded-lg bg-smoke p-3", {
        "bg-lazur": type === "note",
        "bg-grey": type === "prompt",
      })}
    >
      <h5>Название: {task?.title}</h5>
      <p> Автор: {task?.author}</p>
      <p>Дата создания: {task?.date}</p>
      <p>Тип: {task?.type?.label}</p>
    </article>
  );
}

export default Card;
