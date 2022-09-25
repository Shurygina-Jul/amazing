import { useEvent, useList, useStore } from "effector-react";

import { Button, Checkbox, Input } from "@mui/material";

import {
  $tasks,
  $todoDeleting,
  descriptionUpdateClicked,
  titleUpdateClicked,
  todoDeleteClicked,
  todoToggleClicked,
} from "store";

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
      <div>
        <div>Дата создания {task.date}</div>
        <Checkbox checked={task.done} onClick={() => handleToddleStatus(task)} />
        <Input
          value={task.title}
          onChange={(event) => handleTitleUpdate({ ...task, title: event.target.value })}
        />
        <Input
          value={task.description}
          onChange={(event) =>
            handleDescriptionUpdate({ ...task, description: event.target.value })
          }
        />
        <Button onClick={() => handleMessageDelete(task)} disabled={todoDeleting}>
          Delete
        </Button>
      </div>
    ),
  });

  return <div>{list}</div>;
}

export default TodoList;
