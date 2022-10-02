import { Checkbox } from "@mui/material";
import { useEvent } from "effector-react";
import { Link } from "react-router-dom";
import { descriptionUpdateClicked, titleUpdateClicked } from "store";

function Table(props: any) {
  const { task } = props;
  //console.log(task);

  const handleDescriptionUpdate = useEvent(descriptionUpdateClicked);
  const handleTitleUpdate = useEvent(titleUpdateClicked);

  return (
    <tr className="cursor-pointer border-[1px] border-lazur">
      <td className="border-r-[1px] border-lazur">
        <Link
          className="font-semibold text-lazur"
          to={{ pathname: `/task/${task.id}` }}
          state={{ task: task }}
        >
          {task?.id}
        </Link>
      </td>
      <td className="border-r-[1px] border-lazur">{task?.date}</td>
      <td className="border-r-[1px] border-lazur">{task.done.toString()}</td>
      <td className="border-r-[1px] border-lazur">{task?.category?.label}</td>
      <td className="border-r-[1px] border-lazur">
        <input
          value={task.title}
          onChange={(event) => handleTitleUpdate({ ...task, title: event.target.value })}
        />
      </td>
      <td>
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

export default Table;
