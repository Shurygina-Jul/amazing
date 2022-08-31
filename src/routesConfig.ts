import Category from "pages/Category";
import Main from "pages/Main";
import Notes from "pages/Notes";

export const routesConfig = [
  { path: "/", element: Notes },
  { path: "/create-task", element: Main },
  { path: "/create-category", element: Category },
];
