import { setData } from "./../lib/utils";
import { createEffect, createEvent, createStore } from "effector";

import { IItem } from "./interface";

const data = localStorage.getItem("tasks");
const validData = data && JSON.parse(data);

export const $notes = createStore<any>(validData ? validData : []);

//событие на добавление
export const add = createEvent<IItem>();

//событие на удаление
export const remove = createEvent<number>();

//хендлер на добавление
export const addTask = (state: IItem[], data: IItem) => {
  const taskIndex = state?.findIndex((task) => task.id === data.id);
  if (taskIndex > -1) {
    state.splice(taskIndex, 1, data);
  } else {
    state.push(data);
  }
  return [...state];
};

//хендлер на удаление
export const removeTask = (state: IItem[], id: number | string) => {
  let test = state.filter((task) => task.id !== id);
  console.log(test);

  return setData(test, "tasks");

  //return [test];
};

//подписка на обновление при добавлении
$notes.on(add, addTask);

//подписка на обновление при удалении
$notes.on(remove, removeTask);

// // Создаем эффект для изменения данных
export const updateSaveFx = createEffect<any, void, Error>();
export const updategetFx = createEffect<any, any, Error>();

export const getData = (DATA_KEY: any): any => {
  return JSON.parse(localStorage.getItem(DATA_KEY) as string);
};

// // Привязываем к эффекту
// updateSaveFx.use(setData(data, "tasks"));
// updategetFx.use(getData("tasks"));
