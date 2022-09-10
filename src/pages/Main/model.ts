import { createEvent, createStore, merge, sample } from "effector";
import { messageApi } from "shared/api";
import { Message } from "shared/lib/interface";
import { messageSendFx } from "../../shared/api/message";

//все заметки
export const $messages = createStore<Message[]>([]);
//название
export const $messageText = createStore<any>("");
//описание
export const $description = createStore<any>("");

//состояние формы и ее изменение
// export const $test = createStore<any>({});
// export const testChanged = createEvent<any>("");

// $test.on(testChanged, (_, payload) => console.log(payload?.text));

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

$messageText.on(messageTextChanged, (_, text) => text);
$description.on(messageDescriptionChanged, (_, description) => description);

//отправка описания и текста
sample({
  clock: messageSendClicked,
  source: { text: $messageText, description: $description },
  filter: (form): form is { text: string; description: string } => {
    return form.text !== null;
  },
  target: messageApi.messageSendFx,
});

$messages.on(messageApi.messageSendFx.doneData, (messages, newMessage) => [
  ...messages,
  newMessage,
]);

$messageText.on(messageSendFx, () => "");
$description.on(messageSendFx, () => "");

sample({
  clock: messageSendFx.fail,
  fn: ({ params }) => params.text && params.description,
  target: $messageText || $description,
});

sample({
  clock: messageDeleteClicked,
  target: messageApi.messageDeleteFx,
});

$messages.on(messageApi.messageDeleteFx.done, (messages, { params: toDelete }) =>
  messages.filter((message) => message.id !== toDelete.id),
);
