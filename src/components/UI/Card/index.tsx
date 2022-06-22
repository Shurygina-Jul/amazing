import clsx from "clsx";

function Card(props: any) {
  const { task } = props;

  const type = task.type.value;
  console.log(type);
  return (
    <article
      className={clsx("max-w-[200px] rounded-lg p-3", {
        "bg-lazur": type === "note",
        "bg-grey": type === "prompt",
      })}
    >
      <h5> Название: {task.title}</h5>
      <p> Автор: {task.author}</p>
      <p>Дата создания: {task.date}</p>
    </article>
  );
}

export default Card;
