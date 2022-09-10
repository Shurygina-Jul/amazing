import { Todo } from "./interface";

const LocalStorageKey = "todoList";

export function getData(): Todo[] | void {
  const source = localStorage.getItem(LocalStorageKey);
  if (source) {
    return JSON.parse(source);
  }
  return undefined;
}

export function setData(messages: Todo[]) {
  localStorage.setItem(LocalStorageKey, JSON.stringify(messages));
}

export const createId = () =>
  ((new Date().getTime() / 1000) | 0).toString(16) +
  "xxxxxxxxxxxxxxxx".replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase();

export function wait(timeout = Math.random() * 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
