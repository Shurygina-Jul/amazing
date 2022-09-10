import { createEvent, createStore } from "effector";

const data = localStorage.getItem("category");
const validData = data && JSON.parse(data);

export const $category = createStore<any>(validData ? validData : []);

export const add = createEvent<any>();
export const addCategory = (state: any, data: any) => {
  state.push({ value: data?.category, label: data?.category });
  return [...state];
};

$category.on(add, addCategory);
