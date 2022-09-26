import { useEvent } from "effector-react";

import { filterDoneClicked } from "store";

function Filter() {
  const handleFilter = useEvent(filterDoneClicked);

  return (
    <div>
      <p>Фильтровать по статусу</p>
      <button className="rounded-sm bg-smoke px-4 py-1" onClick={() => handleFilter(undefined)}>
        Показать все
      </button>
      <button
        className="rounded-sm bg-lazur bg-opacity-50 px-4 py-1"
        onClick={() => handleFilter(true)}
      >
        Выполено
      </button>
      <button
        className="rounded-sm bg-red bg-opacity-50 px-4 py-1"
        onClick={() => handleFilter(false)}
      >
        Не Выполено
      </button>
    </div>
  );
}

export default Filter;
