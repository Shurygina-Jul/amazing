import dayjs from "dayjs";
import { createEffect } from "effector";

import { createId, getData, setData, wait } from "../lib/helpers";

import { Message } from "shared/lib/interface";
import { SendMessage } from "./interface";

export const messagesLoadFx = createEffect<void, Message[], Error>(async () => {
  const history = getData();
  await wait();
  return history ?? [];
});

export const messageSendFx = createEffect(async ({ text, description }: SendMessage) => {
  console.log(text, description);

  const message: Message = {
    id: createId(),
    timestamp: Date.now(),
    date: dayjs(new Date().toString()).format("YYYY-MM-DD HH:mm:ss"),
    text,
    description,
  };
  const history = await messagesLoadFx();
  setData([...history, message]);
  await wait();
  return message;
});

export const messageDeleteFx = createEffect(async (message: Message) => {
  const history = await messagesLoadFx();
  const updated = history.filter((found) => found.id !== message.id);
  await wait();
  setData(updated);
});
