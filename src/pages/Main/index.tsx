import { useEffect, useState } from "react";
import { useEvent } from "effector-react";

import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";

import { pageMounted } from "store";
import Button from "components/UI/Button";

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
      <header className="mb-4 flex">
        <Button
          text="Создать категорию"
          className="mr-4 bg-lazur bg-opacity-70"
          onClick={() => handleForm()}
        />
        <Button
          text="Создать заметку"
          className="mr-4 bg-lazur bg-opacity-70"
          onClick={() => handleForm()}
        />
        <Button
          text="Фильтровать по статусу"
          className="bg-lazur bg-opacity-70"
          onClick={() => handleFilter()}
        />
      </header>
      <div className="flex justify-between">
        {formVisible && <Form />}
        {filterVisible && <Filter />}
      </div>

      <TodoList />
    </div>
  );
}
export default Main;
