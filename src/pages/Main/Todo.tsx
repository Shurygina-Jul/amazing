import { Checkbox } from "@mui/material";
import { useEvent } from "effector-react";
import { Link } from "react-router-dom";
import { descriptionUpdateClicked, titleUpdateClicked } from "store";

function Todo(props: any) {
  const { task } = props;

  const handleDescriptionUpdate = useEvent(descriptionUpdateClicked);
  const handleTitleUpdate = useEvent(titleUpdateClicked);

  return (
    <tr className="cursor-pointer border-[1px] border-green">
      <td className="border-r-[1px] border-green p-2">
        <Link
          className="font-semibold text-green"
          to={{ pathname: `/task/${task.id}` }}
          state={{ task: task }}
        >
          {task?.id}
        </Link>
      </td>
      <td className="border-r-[1px] border-green p-2">{task?.date}</td>
      <td className="border-greenp-2 border-r-[1px]">{task.done.toString()}</td>
      <td className="border-r-[1px] border-green p-2">{task?.category?.label}</td>
      <td className="border-r-[1px] border-green p-2">
        <input
          value={task.title}
          onChange={(event) => handleTitleUpdate({ ...task, title: event.target.value })}
        />
      </td>
      <td className="p-2">
        <input
          value={task.description}
          onChange={(event) =>
            handleDescriptionUpdate({ ...task, description: event.target.value })
          }
        />
      </td>
    </tr>
  );
}

export default Todo;
