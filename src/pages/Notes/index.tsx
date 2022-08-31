import { useStore } from "effector-react";

import Button from "components/UI/Button";
import Card from "components/UI/Card";

import { $notes, remove } from "store";
import { useEffect, useState } from "react";
import { getData } from "lib/utils";

function Notes() {
  let list: any[] = getData("tasks");

  return (
    <div className="ml-auto mr-auto">
      <p>{list?.length ? "Список очень важных дел" : "Пока не добавлено никаких записей"}</p>
      <ul className="grid grid-cols-5 gap-3">
        {list?.map((item: any, index: number) => (
          <li key={`${item.id}_${index}`}>
            <Card task={item} />
            <Button
              className="mt-4 rounded-lg bg-red"
              text="Удалить"
              onClick={() => {
                remove(item.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
