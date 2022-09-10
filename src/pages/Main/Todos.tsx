import Card from "components/UI/Card";
import { useEvent, useList, useStore } from "effector-react";

import * as model from "./model";

function Todos() {
  const todoDeleting = useStore(model.$todoDeleting);
  const handleMessageDelete = useEvent(model.todoDeleteClicked);

  const list = useList(model.$todos, {
    keys: [todoDeleting],
    fn: (todo) => (
      <div>
        <Card
          message={todo}
          key={todo.timestamp}
          button={{
            onClick: () => handleMessageDelete(todo),
            disabled: todoDeleting,
            name: "Удалить",
          }}
        />
      </div>
    ),
  });

  return <div className="grid grid-cols-3">{list}</div>;
}
export default Todos;
