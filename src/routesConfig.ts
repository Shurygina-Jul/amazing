import Main from "pages/Main";
import CurrentTask from "pages/CurrentTask";

export const routesConfig = [
  { path: "/", element: Main },
  { path: "/task/:id", element: CurrentTask },
];
