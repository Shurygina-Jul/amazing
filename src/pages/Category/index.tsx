import CreateCategory from "components/CreateCategory";
import Button from "components/UI/Button";
import { useNavigate } from "react-router";

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
