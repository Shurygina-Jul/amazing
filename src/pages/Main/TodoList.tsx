import { useList, useStore } from "effector-react";

import { $tasks, $todoDeleting } from "store";
import Table from "./Table";

import Task from "./Task";

function TaskList() {
  //console.log("tasks", tasks);

  const todoDeleting = useStore($todoDeleting);

  const list = useList($tasks, {
    keys: [todoDeleting],
    fn: (task) => <Table task={task} />,
  });

  // return <div className="grid grid-cols-3 gap-2">{list}</div>;
  return (
    <table className="w-full">
      <thead>
        <tr className="border-[1px] border-lazur">
          <td className="w-4 border-r-[1px] border-lazur">ID</td>
          <td className="w-48 border-r-[1px] border-lazur">Дата создания</td>
          <td className="w-16 border-r-[1px] border-lazur">Статус</td>
          <td className="w-[25%] border-r-[1px] border-lazur">Категория</td>
          <td className="w-[25%] border-r-[1px] border-lazur">Название</td>
          <td className="border-r-[1px] border-lazur">Описание</td>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}

export default TaskList;
