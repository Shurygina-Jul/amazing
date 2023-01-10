import { useLocation, useNavigate } from "react-router";
import { useEvent, useStore } from "effector-react";

import { Checkbox } from "@mui/material";

import Button from "components/Button";
import LabelInput from "components/LabelInput";

import {
  $todoDeleting,
  descriptionUpdateClicked,
  titleUpdateClicked,
  todoDeleteClicked,
  todoToggleClicked,
  $tasks,
} from "shared/store";

function CurrentTask() {
  const { state }: any = useLocation();

  const tasks = useStore($tasks);

  const res: any = tasks.find((task) => task?.id === state?.task?.id);

  const todoDeleting = useStore($todoDeleting);
  const handleMessageDelete = useEvent(todoDeleteClicked);
  const handleToddleStatus = useEvent(todoToggleClicked);
  const handleTitleUpdate = useEvent(titleUpdateClicked);
  const handleDescriptionUpdate = useEvent(descriptionUpdateClicked);

  const navigate = useNavigate();

  function handleClick() {
    handleMessageDelete(res);
    navigate("/");
  }

  return (
    <article className="m-auto mt-32 max-w-[1280px]">
      <h5 className="font-medium">Дата создания</h5>
      <time>{res?.date}</time>
      {/* TODO:исправить баг со сменой статуса */}
      <Checkbox checked={res?.done} onClick={() => handleToddleStatus(res)} />
      <span className="font-medium">Статус</span>
      <p>
        <span className="font-medium ">Категория</span> {res?.category?.label}
      </p>
      <LabelInput label="Название">
        <input
          className="text-ellipsis"
          value={res?.title}
          onChange={(event) => handleTitleUpdate({ ...res, title: event?.target?.value })}
        />
      </LabelInput>

      <LabelInput label="Описание">
        <input
          className="text-ellipsis"
          value={res?.description}
          onChange={(event) => handleDescriptionUpdate({ ...res, description: event.target.value })}
        />
      </LabelInput>

      <div className="mt-4">
        <Button onClick={() => navigate("/")} text="Назад" className="bg-lazur" />
        <Button
          onClick={() => handleClick()}
          disabled={todoDeleting}
          text="Удалить"
          className="bg-red"
        />
      </div>
    </article>
  );
}

export default CurrentTask;
