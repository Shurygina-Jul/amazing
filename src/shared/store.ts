import dayjs from "dayjs";
import { createEvent, createStore, createEffect, sample } from "effector";

import { getData, setData } from "helpers";

import { ITask } from "./interface";

export const $tasks = createStore<ITask[]>([]);

export const addTask = createEvent<ITask>();
export const pageMounted = createEvent();

export const todosLoadFx = createEffect<void, ITask[], Error>(async () => {
  const history = getData();
  //await wait();

  return history ?? [];
});

export const todoSendFx = createEffect(async (task: ITask) => {
  const todo: ITask = {
    id: new Date().getTime(),
    timestamp: Date.now(),
    date: dayjs(new Date().toString()).format("YYYY-MM-DD HH:mm:ss"),
    title: task?.title,
    description: task?.description,
    done: false,
    category: { label: task?.category?.label, value: task?.category?.value },
  };
  const history = await todosLoadFx();
  setData([...history, todo]);
  //await wait();

  return todo;
});

export const todoDeleteFx = createEffect(async (todo: ITask) => {
  const history = await todosLoadFx();
  const updated = history.filter((found) => found.id !== todo.id);
  //await wait();
  setData(updated);
});

sample({
  clock: pageMounted,
  target: [todosLoadFx],
});

$tasks.on(todosLoadFx.doneData, (_, tasks) => tasks);

sample({
  clock: addTask,
  target: [todoSendFx],
});
$tasks.on(todoSendFx.doneData, (tasks, newTask) => [...tasks, newTask]);

//загрузка
export const $todoDeleting = todoDeleteFx.pending;
export const $todoSending = todoSendFx.pending;

export const todoDeleteClicked = createEvent<ITask>();

sample({
  clock: todoDeleteClicked,
  target: todoDeleteFx,
});

$tasks.on(todoDeleteFx.done, (todos, { params: toDelete }) =>
  todos.filter((todo) => todo.id !== toDelete.id),
);

//преключение статуса
export const todoToggleClicked = createEvent<ITask>();

export const todoToggleFx = createEffect(async (todo: ITask) => {
  const history = await todosLoadFx();
  const updated = history.map((found) => ({
    ...found,
    done: found.id === todo?.id ? !found.done : found.done,
  }));
  setData(updated);
});

sample({
  clock: todoToggleClicked,
  target: todoToggleFx,
});

$tasks.on(todoToggleFx.done, (todos, { params: toToggle }) =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === toToggle.id ? !todo.done : todo.done,
  })),
);

//TODO: написать общую функцию которая принимает изменяемое поле

//изменение заголовка
export const titleUpdateClicked = createEvent<ITask>();

export const titleUpdateFx = createEffect(async (todo: ITask) => {
  const history = await todosLoadFx();
  const updated = history.map((found) => ({
    ...found,
    title: found.id === todo?.id ? todo.title : found.title,
  }));
  setData(updated);
});

sample({
  clock: titleUpdateClicked,
  target: titleUpdateFx,
});

$tasks.on(titleUpdateFx.done, (todos, { params: toUpdate }) =>
  todos.map((todo) => ({
    ...todo,
    title: todo.id === toUpdate?.id ? toUpdate.title : todo.title,
  })),
);

//изменение описания
export const descriptionUpdateClicked = createEvent<ITask>();

export const descriptionUpdateFx = createEffect(async (todo: ITask) => {
  const history = await todosLoadFx();
  const updated = history.map((found) => ({
    ...found,
    description: found.id === todo?.id ? todo.description : found.description,
  }));
  setData(updated);
});

sample({
  clock: descriptionUpdateClicked,
  target: descriptionUpdateFx,
});

$tasks.on(descriptionUpdateFx.done, (todos, { params: toUpdate }) =>
  todos.map((todo) => ({
    ...todo,
    description: todo.id === toUpdate?.id ? toUpdate.description : todo.description,
  })),
);

//фильтровать по статусу
export const filterDoneClicked = createEvent<boolean | undefined>();

export const filterDoneFx = createEffect(async () => {
  await todosLoadFx();
});

sample({
  clock: filterDoneClicked,
  target: filterDoneFx,
});

$tasks.on(filterDoneFx.done, (todos, { params: done }) =>
  done === undefined ? todos : todos.filter((todo) => todo.done === Boolean(done)),
);
