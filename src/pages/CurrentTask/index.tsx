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
} from "store";

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
    handleMessageDelete(state?.task);
    navigate("/");
  }
  return (
    <form className="m-auto mt-32 max-w-[1280px]">
      <fieldset>
        <legend>Карточка № {res?.id} </legend>

        <h5 className="font-medium text-lazur">Дата создания</h5>
        <time>{res?.date}</time>
        <Checkbox checked={state?.task?.done} onClick={() => handleToddleStatus(state?.task)} />
        <span className="font-medium text-lazur">Статус</span>
        <p>
          <span className="font-medium text-lazur">Категория</span> {state?.task?.category?.label}
        </p>
        <LabelInput label="Название">
          <input
            value={res?.title}
            onChange={(event) => handleTitleUpdate({ ...res, title: event?.target?.value })}
          />
        </LabelInput>

        <LabelInput label="Описание">
          <input
            value={res?.description}
            onChange={(event) =>
              handleDescriptionUpdate({ ...res, description: event.target.value })
            }
          />
        </LabelInput>

        <div className="mt-4">
          <Button onClick={() => navigate("/")} text="Назад" className="bg-lazur bg-opacity-40" />
          <Button
            onClick={() => handleClick()}
            disabled={todoDeleting}
            text="Удалить"
            className="bg-red bg-opacity-40"
          />
        </div>
      </fieldset>
    </form>
  );
}

export default CurrentTask;
