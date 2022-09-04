import { createEvent, createStore, merge, sample } from "effector";
import { Message, messageApi } from "shared/api";
import { messageSendFx } from "../../shared/api/message";

export const $messages = createStore<Message[]>([]);
export const $messageText = createStore("");

export const $messageDeleting = messageApi.messageDeleteFx.pending;
export const $messageSending = messageApi.messageSendFx.pending;

// And the events report just what happened
export const pageMounted = createEvent();
export const messageDeleteClicked = createEvent<Message>();
export const messageSendClicked = createEvent();
export const messageEnterPressed = createEvent();
export const messageTextChanged = createEvent<string>();
export const loginClicked = createEvent();
export const logoutClicked = createEvent();

sample({
  clock: pageMounted,
  target: [messageApi.messagesLoadFx],
});

$messages.on(messageApi.messagesLoadFx.doneData, (_, messages) => messages);
$messageText.on(messageTextChanged, (_, text) => text);

const messageSend = merge([messageEnterPressed, messageSendClicked]);

sample({
  clock: messageSend,
  source: { text: $messageText },
  target: messageApi.messageSendFx,
});

$messages.on(messageApi.messageSendFx.doneData, (messages, newMessage) => [
  ...messages,
  newMessage,
]);

$messageText.on(messageSendFx, () => "");

sample({
  clock: messageSendFx.fail,
  fn: ({ params }) => params.text,
  target: $messageText,
});

sample({
  clock: messageDeleteClicked,
  target: messageApi.messageDeleteFx,
});

$messages.on(messageApi.messageDeleteFx.done, (messages, { params: toDelete }) =>
  messages.filter((message) => message.id !== toDelete.id),
);
