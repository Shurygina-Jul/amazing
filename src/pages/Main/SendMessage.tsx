import { useEvent, useList, useStore } from "effector-react";
import * as React from "react";

import * as model from "./model";

function SendMessage() {
  const userName = useStore(model.$userName);
  const messageText = useStore(model.$messageText);
  const messageSending = useStore(model.$messageSending);

  const handleLogout = useEvent(model.logoutClicked);
  const handleTextChange = useEvent(model.messageTextChanged);
  const handleEnterPress = useEvent(model.messageEnterPressed);
  const handleSendClick = useEvent(model.messageSendClicked);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEnterPress();
    }
  };

  return (
    <div className="message-form">
      <h3>{userName}</h3>
      <input
        value={messageText}
        onChange={(event) => handleTextChange(event.target.value)}
        onKeyPress={handleKeyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={() => handleSendClick()} disabled={messageSending}>
        {messageSending ? "Sending..." : "Send"}
      </button>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  );
}

export default SendMessage;
