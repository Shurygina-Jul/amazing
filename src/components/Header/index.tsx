import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-grey p-6">
      <ul className="flex">
        <li className="mr-4">
          <NavLink to="/create-category">Создать категорию</NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/create-task">Добавить запись</NavLink>
        </li>
        <li>
          <NavLink to="/">Список задач</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
