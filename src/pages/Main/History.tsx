import Card from "components/UI/Card";
import { useEvent, useList, useStore } from "effector-react";

import * as model from "./model";

function History() {
  const messageDeleting = useStore(model.$messageDeleting);
  const handleMessageDelete = useEvent(model.messageDeleteClicked);

  const list = useList(model.$messages, {
    keys: [messageDeleting],
    fn: (message) => (
      <div>
        <Card
          message={message}
          key={message.timestamp}
          button={{
            onClick: () => handleMessageDelete(message),
            disabled: messageDeleting,
            name: "Удалить",
          }}
        />
      </div>
    ),
  });

  return <div className="grid grid-cols-3">{list}</div>;
}
export default History;
