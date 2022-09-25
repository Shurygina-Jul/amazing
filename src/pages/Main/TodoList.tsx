import { useEvent, useList, useStore } from "effector-react";

import { Button, Checkbox, Input } from "@mui/material";

import { $tasks, $todoDeleting, todoDeleteClicked, todoToggleClicked } from "store";

function TodoList() {
  const tasks = useStore($tasks);
  console.log("tasks", tasks);

  const todoDeleting = useStore($todoDeleting);
  const handleMessageDelete = useEvent(todoDeleteClicked);
  const handleToddleStatus = useEvent(todoToggleClicked);

  const list = useList($tasks, {
    keys: [todoDeleting],
    fn: (task) => (
      <div>
        <div>Дата создания {task.date}</div>
        <Checkbox checked={task.done} onClick={() => handleToddleStatus(task)} />
        <Input
          value={task.title}
          // onChange={(event) =>
          //   updateTask({ id: task.id, title: event.target.value, description: task.description })
          // }
        />
        <Input
          value={task.description}
          // onChange={(event) =>
          //   updateTask({ id: task.id, title: task.title, description: event.target.value })
          // }
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
