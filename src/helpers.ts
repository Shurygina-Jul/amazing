import { ITask } from "interface";

const LocalStorageKey = "todoList";

export function getData() {
  const source = localStorage.getItem(LocalStorageKey);
  if (source) {
    return JSON.parse(source);
  }
  return undefined;
}

export function setData(tasks: ITask[]) {
  localStorage.setItem(LocalStorageKey, JSON.stringify(tasks));
}

export function wait(timeout = Math.random() * 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
