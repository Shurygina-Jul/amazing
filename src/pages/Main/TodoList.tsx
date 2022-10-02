import { useList, useStore } from "effector-react";

import Todo from "./Todo";

import { $tasks, $todoDeleting } from "store";

function TaskList() {
  const todoDeleting = useStore($todoDeleting);

  const list = useList($tasks, {
    keys: [todoDeleting],
    fn: (task) => <Todo task={task} />,
  });

  return (
    <table className="w-full text-center">
      <thead>
        <tr className="border-[1px] border-green">
          <td className="w-4 border-r-[1px] border-green p-2">ID</td>
          <td className="w-48 border-r-[1px] border-green p-2">Дата создания</td>
          <td className="w-16 border-r-[1px] border-green p-2">Статус</td>
          <td className="w-[25%] border-r-[1px] border-green p-2">Категория</td>
          <td className="w-[25%] border-r-[1px] border-green p-2">Название</td>
          <td className="p-2">Описание</td>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}

export default TaskList;
