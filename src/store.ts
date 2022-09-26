import dayjs from "dayjs";
import { createEvent, createStore, createEffect, sample } from "effector";
import { getData, setData, wait } from "helpers";
import { ITask } from "interface";

// export interface Todo {
//   id: number;
//   title: string;
//   description: string;
//   done: boolean;
//   date: string;
// }

// export const updateTodo = (todos: Todo[], id: number, title: string, description: string): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     title: todo.id === id ? title : todo.title,
//     description: todo.id === id ? description : todo.description,
//   }));

// export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));

// export const removeTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.filter((todo) => todo.id !== id);

// export const addTodoToList = (todos: Todo[], title: string, description: string): Todo[] => [
//   ...todos,
//   {
//     id: Number(createId()),
//     title,
//     description,
//     done: false,
//     date: dayjs(new Date().toString()).format("YYYY-MM-DD HH:mm:ss"),
//   },
// ];

// interface Store {
//   todos: Todo[];
//   newTodo?: any;
// }
// export const setNewTodo = createEvent<{ title: string; description: string }>();
// export const addTodo = createEvent();
// export const update = createEvent<{ id: number; title: string; description: string }>();
// export const remove = createEvent<number>();
// export const toggle = createEvent<number>();

// export default createStore<Store>({
//   todos: [],
//   newTodo: {},
// })
//   // .on(getTodos.doneData, (state, todos) => ({ ...state, todos }))
//   .on(setNewTodo, (state, newTodo) => ({ ...state, newTodo }))
//   .on(addTodo, (state) => ({
//     ...state,
//     newTodo: { title: "", description: "" },
//     todos: addTodoToList(state.todos, state.newTodo.title, state.newTodo.description),
//   }))
//   .on(update, (state, { id, title, description }) => ({
//     ...state,
//     todos: updateTodo(state.todos, id, title, description),
//   }))
//   .on(remove, (state, id) => ({
//     ...state,
//     todos: removeTodo(state.todos, id),
//   }))
//   .on(toggle, (state, id) => ({
//     ...state,
//     todos: toggleTodo(state.todos, id),
//   }));

export const $tasks = createStore<ITask[]>([]);

export const addTask = createEvent<ITask>();
export const pageMounted = createEvent();

export const todosLoadFx = createEffect<void, ITask[], Error>(async () => {
  const history = getData();
  await wait();

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
  };
  const history = await todosLoadFx();
  setData([...history, todo]);
  await wait();

  return todo;
});

export const todoDeleteFx = createEffect(async (todo: ITask) => {
  const history = await todosLoadFx();
  const updated = history.filter((found) => found.id !== todo.id);
  await wait();
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
    done: found.id === todo?.id ? !found.done : todo.done,
  }));
  await wait();
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
  const history = await todosLoadFx();
});

sample({
  clock: filterDoneClicked,
  target: filterDoneFx,
});

$tasks.on(filterDoneFx.done, (todos, { params: done }) =>
  done === undefined ? todos : todos.filter((todo) => todo.done === Boolean(done)),
);
