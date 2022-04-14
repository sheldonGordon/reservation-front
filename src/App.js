import './App.css';
import {Role} from "./features/roles/components/Role";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";

function App() {

  return (
      <BrowserRouter>
          <NavBar />

          <Routes>
              <Route exact path="/" element={<Accueil />} ></Route>
              <Route path="/gestion/role" element={<Role />}></Route>
          </Routes>
      </BrowserRouter>
);
}

export default App;
