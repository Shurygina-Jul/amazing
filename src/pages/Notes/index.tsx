import Card from "components/UI/Card";
import { useStore } from "effector-react";
import { $notes } from "store";

function Notes() {
  const notes = useStore($notes);
  const data = localStorage.getItem("tasks");
  const validData = data && JSON.parse(data);
  console.log(validData);

  return (
    <div>
      <p>{validData?.length ? "Список очень важных дел" : "Пока не добавлено никаких записей"}</p>
      <ul className="grid grid-cols-5 gap-3">
        {validData?.map((item: any) => (
          <li>
            <Card task={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
