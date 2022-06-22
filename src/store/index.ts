import { createEvent, createStore } from "effector";
import { stat } from "fs";
import { IItem } from "./interface";

const data = localStorage.getItem("tasks");
const validData = data && JSON.parse(data);
export const $notes = createStore<any>(validData ? validData : []);

export const add = createEvent<IItem>();
export const remove = createEvent<IItem>();

export const addTask = (state: IItem[], data: IItem) => {
  const taskIndex = state?.findIndex((task) => task.title === data.title);

  // Изменяем стейт
  if (taskIndex > -1) {
    state.splice(taskIndex, 1, data);
  } else {
    state.push(data);
  }

  // Возвращаем измененный стейт
  return [...state];
};

export const removeTask = (state: IItem[], data: IItem) => {
  return [...state];
};

$notes.on(add, addTask);
