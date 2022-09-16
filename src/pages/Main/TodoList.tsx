import { Button, Checkbox, Input } from "@mui/material";
import { useStore } from "effector-react";

import $store, { update, toggle, remove } from "../../store";

function TodoList() {
  const store = useStore($store);

  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => toggle(todo.id)} />
          <Input
            value={todo.title}
            onChange={(event) =>
              update({ id: todo.id, title: event.target.value, description: todo.description })
            }
          />
          <Input
            value={todo.description}
            onChange={(event) =>
              update({ id: todo.id, title: todo.title, description: event.target.value })
            }
          />
          <Button onClick={() => remove(todo.id)}>Delete</Button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
