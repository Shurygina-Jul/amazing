import { useEvent, useList, useStore } from "effector-react";

import { TextInput } from "components/UI/TextInput";

import {
  $tasks,
  $todoDeleting,
  descriptionUpdateClicked,
  titleUpdateClicked,
  todoDeleteClicked,
  todoToggleClicked,
} from "store";

import Button from "components/UI/Button";
import LabelInput from "components/UI/LabelInput";
import Checkbox from "@mui/material/Checkbox";

function TodoList() {
  const tasks = useStore($tasks);
  console.log("tasks", tasks);

  const todoDeleting = useStore($todoDeleting);
  const handleMessageDelete = useEvent(todoDeleteClicked);
  const handleToddleStatus = useEvent(todoToggleClicked);
  const handleTitleUpdate = useEvent(titleUpdateClicked);
  const handleDescriptionUpdate = useEvent(descriptionUpdateClicked);

  const list = useList($tasks, {
    keys: [todoDeleting],
    fn: (task) => (
      <article className="min-h-[200px] max-w-[300px] rounded-lg bg-smoke p-3">
        <h5>Дата создания</h5>
        <time>{task.date}</time>
        <Checkbox checked={task.done} onClick={() => handleToddleStatus(task)} />
        <span>Статус</span>
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
    ),
  });

  return <div className="grid grid-cols-3 gap-2">{list}</div>;
}

export default TodoList;
