import { useEffect } from "react";
import { useEvent } from "effector-react";

import Todos from "./Todos";
import SendTodo from "./SendTodo";

import * as model from "./model";
import Form from "./Form";
import TodoList from "./TodoList";

export function Main() {
  const handlePageMount = useEvent(model.pageMounted);
  useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div>
      <Todos />
      <SendTodo />
      <hr />
      <TodoList />
      <Form />
    </div>
  );
}
export default Main;
