import { createEvent, createStore, sample } from "effector";

import { todoApi } from "shared/api";
import { Todo } from "shared/lib/interface";
import { todoSendFx } from "../../shared/api/todo";

//все заметки
export const $todos = createStore<Todo[]>([]);
//название
export const $todoTitle = createStore<any>("");
//описание
export const $description = createStore<any>("");

export const $todoDeleting = todoApi.todoDeleteFx.pending;
export const $todoSending = todoApi.todoSendFx.pending;

export const pageMounted = createEvent();

export const todoDeleteClicked = createEvent<Todo>();
export const todoSendClicked = createEvent();
export const messageTextChanged = createEvent<any>();
export const messageDescriptionChanged = createEvent<any>();

sample({
  clock: pageMounted,
  target: [todoApi.todosLoadFx],
});

$todos.on(todoApi.todosLoadFx.doneData, (_, todos) => todos);

$todoTitle.on(messageTextChanged, (_, title) => title);
$description.on(messageDescriptionChanged, (_, description) => description);

//отправка описания и текста
sample({
  clock: todoSendClicked,
  source: { text: $todoTitle, description: $description },
  filter: (form): form is { text: string; description: string } => {
    return form.text !== null;
  },
  target: todoApi.todoSendFx,
});

$todos.on(todoApi.todoSendFx.doneData, (todos, newTodo) => [...todos, newTodo]);

$todoTitle.on(todoSendFx, () => "");
$description.on(todoSendFx, () => "");

sample({
  clock: todoSendFx.fail,
  fn: ({ params }) => params.text && params.description,
  target: $todoTitle || $description,
});

sample({
  clock: todoDeleteClicked,
  target: todoApi.todoDeleteFx,
});

$todos.on(todoApi.todoDeleteFx.done, (todos, { params: toDelete }) =>
  todos.filter((todo) => todo.id !== toDelete.id),
);
