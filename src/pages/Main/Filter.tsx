import Button from "components/UI/Button";
import { useEvent } from "effector-react";

import { filterDoneClicked } from "store";

function Filter() {
  const handleFilter = useEvent(filterDoneClicked);

  return (
    <section>
      <Button className="bg-smoke" onClick={() => handleFilter(undefined)} text="Показать все" />
      <Button
        className=" bg-green bg-opacity-50"
        onClick={() => handleFilter(true)}
        text="Выполено"
      />

      <Button
        className="bg-red bg-opacity-50"
        onClick={() => handleFilter(false)}
        text="Не Выполено"
      />
    </section>
  );
}

export default Filter;
