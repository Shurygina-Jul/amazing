import { useEvent, useList, useStore } from "effector-react";
import * as React from "react";

import * as model from "./model";

function History() {
  const messageDeleting = useStore(model.$messageDeleting);
  const handleMessageDelete = useEvent(model.messageDeleteClicked);

  // Hook `useList` allows React not rerender messages really doesn't changed
  const messages = useList(model.$messages, {
    keys: [messageDeleting],
    fn: (message) => (
      <div className="message-item" key={message.timestamp}>
        <h3>From: {message.author.name}</h3>
        <p>{message.text}</p>
        <button onClick={() => handleMessageDelete(message)}>
          {messageDeleting ? "Deleting" : "Delete"}
        </button>
      </div>
    ),
  });
  // We don't need `useCallback` here because we pass function to an HTML-element, not a custom component

  return (
    <div className="chat-history">
      {messages}
      <>{console.log(messages)}</>
    </div>
  );
}
export default History;
