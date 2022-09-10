import { useEvent, useList, useStore } from "effector-react";

import Button from "components/UI/Button";
import Card from "components/UI/Card";

import { $notes, remove } from "store";
import { useEffect, useState } from "react";
import { getData } from "lib/utils";

import * as model from "../../example/model";

function Notes() {
  let list: any[] = getData("tasks");

  const messageDeleting = useStore(model.$messageDeleting);
  const handleMessageDelete = useEvent(model.messageDeleteClicked);

  const messages = useList(model.$messages, {
    keys: [messageDeleting],
    fn: (message) => (
      <div className="message-item" key={message.timestamp}>
        {/* <h3>From: {message.author.name}</h3> */}
        <p>{message.text}</p>
        <button onClick={() => handleMessageDelete(message)} disabled={messageDeleting}>
          {messageDeleting ? "Deleting" : "Delete"}
        </button>
      </div>
    ),
  });
  // We don't need `useCallback` here because we pass function to an HTML-element, not a custom component

  return <div className="chat-history">{messages}</div>;

  // return (
  //   <div className="ml-auto mr-auto">
  //     <p>{list?.length ? "Список очень важных дел" : "Пока не добавлено никаких записей"}</p>
  //     <ul className="grid grid-cols-5 gap-3">
  //       {list?.map((item: any, index: number) => (
  //         <li key={`${item.id}_${index}`}>
  //           <Card task={item} />
  //           <Button
  //             className="mt-4 rounded-lg bg-red"
  //             text="Удалить"
  //             onClick={() => {
  //               remove(item.id);
  //             }}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Notes;
