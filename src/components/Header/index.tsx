import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-grey p-6">
      <ul className="flex">
        <li className="mr-4">
          <NavLink to="/">Главная</NavLink>
        </li>
        {/* <li>
          <NavLink className="mr-4" to="/notes">
            Заметки
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/promts">Напоминания</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
