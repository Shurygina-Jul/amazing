import { useEffect } from "react";
import { useEvent } from "effector-react";

import Todos from "./Todos";
import SendTodo from "./SendTodo";

// import * as model from "./model";
import Form from "./Form";
import TodoList from "./TodoList";
import { pageMounted } from "store";
import Filter from "./Filter";

export function Main() {
  const handlePageMount = useEvent(pageMounted);
  useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div>
      {/* <Todos />
      <SendTodo />
      <hr /> */}
      <Filter />
      <TodoList />
      <Form />
    </div>
  );
}
export default Main;
