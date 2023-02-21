import CurrentTask from "pages/CurrentTask";
import Main from "pages/Main";

export const routesConfig = [
  { path: "/amazing", element: Main },
  { path: "/task/:id", element: CurrentTask },
];
