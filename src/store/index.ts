import { createEvent, createStore } from "effector";

import { IItem } from "./interface";

const data = localStorage.getItem("tasks");
const validData = data && JSON.parse(data);

export const $notes = createStore<any>(validData ? validData : []);

export const add = createEvent<IItem>();
export const remove = createEvent<number>();

export const addTask = (state: IItem[], data: IItem) => {
  const taskIndex = state?.findIndex((task) => task.id === data.id);
  if (taskIndex > -1) {
    state.splice(taskIndex, 1, data);
  } else {
    state.push(data);
  }
  return [...state];
};

export const removeTask = (state: IItem[], id: number | string) => {
  let tasks = state.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return [...state];
};

$notes.on(add, addTask);
$notes.on(remove, removeTask);
