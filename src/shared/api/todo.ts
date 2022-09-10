import dayjs from "dayjs";
import { createEffect } from "effector";

import { createId, getData, setData, wait } from "../lib/helpers";

import { Todo } from "shared/lib/interface";
import { SendTodo } from "./interface";

export const todosLoadFx = createEffect<void, Todo[], Error>(async () => {
  const history = getData();
  await wait();
  return history ?? [];
});

export const todoSendFx = createEffect(async ({ text, description }: SendTodo) => {
  const todo: Todo = {
    id: createId(),
    timestamp: Date.now(),
    date: dayjs(new Date().toString()).format("YYYY-MM-DD HH:mm:ss"),
    text,
    description,
  };
  const history = await todosLoadFx();
  setData([...history, todo]);
  await wait();
  return todo;
});

export const todoDeleteFx = createEffect(async (todo: Todo) => {
  const history = await todosLoadFx();
  const updated = history.filter((found) => found.id !== todo.id);
  await wait();
  setData(updated);
});
