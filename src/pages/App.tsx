import Header from "components/Header";
import { Route, Routes } from "react-router";
import { routesConfig } from "routesConfig";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routesConfig.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element()} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
