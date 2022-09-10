import * as React from "react";
import { useEvent, useStore } from "effector-react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import Button from "components/UI/Button";

import * as model from "./model";
import { $category } from "components/CreateCategory/store";

function SendMessage() {
  const messageText = useStore(model.$message);
  const messageDescription = useStore(model.$description);
  const messageSending = useStore(model.$messageSending);

  const handleTextChange = useEvent(model.messageTextChanged);
  const handleDescriptionChange = useEvent(model.messageDescriptionChanged);

  const handleSendClick = useEvent(model.messageSendClicked);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<any>();

  function getData(): any[] | void {
    const source = localStorage.getItem("category");
    if (source) {
      return JSON.parse(source);
    }
    return undefined;
  }

  return (
    <form className="p-8" onSubmit={handleSubmit(() => handleSendClick())}>
      <fieldset>
        <legend>
          <h3>Cоздать заметку или напоминание</h3>
        </legend>

        <LabelInput label="Название">
          <TextInput
            {...register("messageText", {
              required: true,
            })}
            value={messageText}
            onChange={(event) => handleTextChange(event.target.value)}
            placeholder="Введите название"
          />
        </LabelInput>

        <LabelInput label="Описание">
          <TextInput
            {...register("messageDescription", {
              required: true,
            })}
            value={messageDescription}
            onChange={(event) => handleDescriptionChange(event.target.value)}
            placeholder="Введите описание"
          />
        </LabelInput>

        <LabelInput errors={errors.title}>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Выберите категорию"
                className="mb-4 w-[240px]"
                options={getData() || []}
              />
            )}
          />
        </LabelInput>

        <div className="inline-block rounded-lg bg-lazur text-smoke">
          <Button
            text="Добавить"
            type="submit"
            className="rounded-lg"
            onClick={() => {
              handleSendClick();
            }}
            disabled={!isDirty}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default SendMessage;
