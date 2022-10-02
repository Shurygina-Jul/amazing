import CurrentTask from "pages/CurrentTask";
import Main from "pages/Main";

export const routesConfig = [
  { path: "/", element: Main },
  { path: "/task/:id", element: CurrentTask },
];
