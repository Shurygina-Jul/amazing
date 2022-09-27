import { useEvent, useStore } from "effector-react";
import Checkbox from "@mui/material/Checkbox";

import Button from "components/Button";
import LabelInput from "components/LabelInput";

import {
  $todoDeleting,
  descriptionUpdateClicked,
  titleUpdateClicked,
  todoDeleteClicked,
  todoToggleClicked,
} from "store";

function Task(props: any) {
  const { task } = props;

  const todoDeleting = useStore($todoDeleting);
  const handleMessageDelete = useEvent(todoDeleteClicked);
  const handleToddleStatus = useEvent(todoToggleClicked);
  const handleTitleUpdate = useEvent(titleUpdateClicked);
  const handleDescriptionUpdate = useEvent(descriptionUpdateClicked);

  return (
    <article className="ml-auto mr-auto min-h-[200px] max-w-[300px] rounded-lg bg-smoke p-3">
      <h5 className="font-medium text-lazur">Дата создания</h5>
      <time>{task.date}</time>
      <Checkbox checked={task.done} onClick={() => handleToddleStatus(task)} />
      <span className="font-medium text-lazur">Статус</span>
      <p>
        <span className="font-medium text-lazur">Категория</span> {task?.category?.label}
      </p>
      <LabelInput label="Название">
        <input
          className="bg-smoke"
          value={task.title}
          onChange={(event) => handleTitleUpdate({ ...task, title: event.target.value })}
        />
      </LabelInput>
      <LabelInput label="Описание">
        <input
          className="bg-smoke"
          value={task.description}
          onChange={(event) =>
            handleDescriptionUpdate({ ...task, description: event.target.value })
          }
        />
      </LabelInput>

      <Button
        onClick={() => handleMessageDelete(task)}
        disabled={todoDeleting}
        text="Удалить"
        className="bg-red bg-opacity-40"
      />
    </article>
  );
}

export default Task;
