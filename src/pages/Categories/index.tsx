import { useNavigate } from "react-router";

import Button from "components/UI/Button";

import CreateCategory from "./CreateCategory";

function Category() {
  let navigate = useNavigate();

  return (
    <>
      <CreateCategory />
      <div className="mt-4 inline-block rounded-lg bg-lazur text-smoke">
        <Button text="Пропустить \ Далее" onClick={() => navigate("/create-task")} />
      </div>
    </>
  );
}

export default Category;
