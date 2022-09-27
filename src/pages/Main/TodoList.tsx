import { useList, useStore } from "effector-react";

import { $tasks, $todoDeleting } from "store";

import Task from "./Task";

function TodoList() {
  //console.log("tasks", tasks);

  const todoDeleting = useStore($todoDeleting);

  const list = useList($tasks, {
    keys: [todoDeleting],
    fn: (task) => <Task task={task} />,
  });

  return <div className="grid grid-cols-3 gap-2">{list}</div>;
}

export default TodoList;
