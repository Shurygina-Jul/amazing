import CreateCategory from "components/CreateCategory";
import Button from "components/UI/Button";

function Category() {
  return (
    <>
      <CreateCategory />
      <div className="mt-4 inline-block rounded-lg bg-lazur text-smoke">
        <Button text="Далее" />
      </div>
    </>
  );
}

export default Category;
