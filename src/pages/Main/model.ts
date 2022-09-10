import { createEvent, createStore, merge, sample } from "effector";
import { messageApi } from "shared/api";
import { Message } from "shared/lib/interface";
import { messageSendFx } from "../../shared/api/message";

//все заметки
export const $messages = createStore<Message[]>([]);
//название
export const $message = createStore<any>("");
//описание
export const $description = createStore<any>("");

export const $messageDeleting = messageApi.messageDeleteFx.pending;
export const $messageSending = messageApi.messageSendFx.pending;

export const pageMounted = createEvent();

export const messageDeleteClicked = createEvent<Message>();
export const messageSendClicked = createEvent();

export const messageTextChanged = createEvent<any>();
export const messageDescriptionChanged = createEvent<any>();

sample({
  clock: pageMounted,
  target: [messageApi.messagesLoadFx],
});

$messages.on(messageApi.messagesLoadFx.doneData, (_, messages) => messages);

$message.on(messageTextChanged, (_, text) => text);
$description.on(messageDescriptionChanged, (_, description) => description);

//TODO:  убрать
//const messageSend = merge([messageSendClicked]);

sample({
  clock: messageSendClicked,
  source: { text: $message, description: $description },
  target: messageApi.messageSendFx,
});

$messages.on(messageApi.messageSendFx.doneData, (messages, newMessage) => [
  ...messages,
  newMessage,
]);

$message.on(messageSendFx, () => {});

sample({
  clock: messageSendFx.fail,
  fn: ({ params }) => params,
  target: $message,
});

sample({
  clock: messageDeleteClicked,
  target: messageApi.messageDeleteFx,
});

$messages.on(messageApi.messageDeleteFx.done, (messages, { params: toDelete }) =>
  messages.filter((message) => message.id !== toDelete.id),
);
