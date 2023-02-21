import { useEffect, useState } from "react";
import { useEvent } from "effector-react";

import Button from "components/Button";

import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";
import CreateCategory from "./Categories/CreateCategory";

import { pageMounted } from "shared/store";

export function Main() {
  const [formVisible, setFormVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);

  function handleForm() {
    setFormVisible(!formVisible);
  }

  function handleFilter() {
    setFilterVisible(!filterVisible);
  }

  function handleCategory() {
    setCategoryVisible(!categoryVisible);
  }
  const handlePageMount = useEvent(pageMounted);
  useEffect(() => {
    handlePageMount();
  }, []);

  return (
    <div className="mr-auto ml-auto max-w-[1280px]">
      {/* TODO: вынести в отдельный компонет */}
      <header className="mb-4 grid grid-cols-3">
        <div>
          <Button
            text="Создать категорию"
            className="mr-4 mb-8 border-2 border-lazur hover:bg-lazur"
            onClick={() => handleCategory()}
          />
          {categoryVisible && <CreateCategory />}
        </div>
        <div>
          <Button
            text="Создать заметку"
            className="mr-4 mb-8 border-2 border-lazur hover:bg-lazur"
            onClick={() => handleForm()}
          />
          {formVisible && <Form />}
        </div>
        <div>
          <Button
            text="Фильтровать по статусу"
            className="mb-8 border-2 border-lazur hover:bg-lazur"
            onClick={() => handleFilter()}
          />
          {filterVisible && <Filter />}
        </div>
      </header>

      <TodoList />
    </div>
  );
}
export default Main;
