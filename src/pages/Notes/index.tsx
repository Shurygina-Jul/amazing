import { useEvent, useList, useStore } from "effector-react";
import { $messageDeleting, $messages, messageDeleteClicked } from "store/model";

function Notes() {
  const messageDeleting = useStore($messageDeleting);
  const handleMessageDelete = useEvent(messageDeleteClicked);

  const messages = useList($messages, {
    keys: [messageDeleting],
    fn: (message) => (
      <div className="text-red" key={message.timestamp}>
        <p>{message.text}</p>
        <button onClick={() => handleMessageDelete(message)}>
          {messageDeleting ? "Deleting" : "Delete"}
        </button>
      </div>
    ),
  });

  return (
    <div>
      {messages}
      <>{console.log(messages)}</>
    </div>
  );
}

export default Notes;
