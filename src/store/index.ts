import { createEvent, createStore } from "effector";
import { IItem } from "./interface";

export const $data = createStore<IItem[]>([]);

export const add = createEvent<IItem>();
export const remove = createEvent<IItem>();
export const change = createEvent<IItem>();

const addData = (state: IItem[], data: IItem) => {
  return state;
};

$data.on(add, addData);
