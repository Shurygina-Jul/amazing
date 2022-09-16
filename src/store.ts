import { createEvent, createStore, createEffect } from "effector";

// Standard interface and functions
export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, title: string, description: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
    description: todo.id === id ? description : todo.description,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodoToList = (todos: Todo[], title: string, description: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    description,
    done: false,
  },
];

// Effector implementation
interface Store {
  todos: Todo[];
  newTodo: any;
}
export const setNewTodo = createEvent<{ title: string; description: string }>();
export const addTodo = createEvent();
export const update = createEvent<{ id: number; title: string; description: string }>();
export const remove = createEvent<number>();
export const toggle = createEvent<number>();

export default createStore<Store>({
  todos: [],
  newTodo: {},
})
  // .on(getTodos.doneData, (state, todos) => ({ ...state, todos }))
  .on(setNewTodo, (state, newTodo) => ({ ...state, newTodo }))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: { title: "", description: "" },
    todos: addTodoToList(state.todos, state.newTodo.title, state.newTodo.description),
  }))
  .on(update, (state, { id, title, description }) => ({
    ...state,
    todos: updateTodo(state.todos, id, title, description),
  }))
  .on(remove, (state, id) => ({
    ...state,
    todos: removeTodo(state.todos, id),
  }))
  .on(toggle, (state, id) => ({
    ...state,
    todos: toggleTodo(state.todos, id),
  }));
