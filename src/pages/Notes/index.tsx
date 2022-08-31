import { useStore } from "effector-react";

import Button from "components/UI/Button";
import Card from "components/UI/Card";

import { $notes, remove } from "store";

function Notes() {
  const notes = useStore($notes);
  const data = localStorage.getItem("tasks");
  const validData = data && JSON.parse(data);
  // console.log(validData.length);

  return (
    <div className="ml-auto mr-auto">
      <p>{validData?.length ? "Список очень важных дел" : "Пока не добавлено никаких записей"}</p>
      <ul className="grid grid-cols-5 gap-3">
        {validData?.map((item: any, index: number) => (
          <li key={`${item.id}_${index}`}>
            <Card task={item} />
            <Button
              className="mt-4 rounded-lg bg-red"
              text="Удалить"
              onClick={() => {
                //console.log("удалили дело с названием", item.id);
                remove(item.id);
                // localStorage.setItem("tasks", JSON.stringify(notes));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
