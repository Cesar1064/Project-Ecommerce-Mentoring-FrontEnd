import "./assets/header/Header.css";
import "./assets/content/cardPhone.css";
import "./assets/content/cardsPhones.css";
import "./assets/pages/phoneDetail.css"
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PhoneDetail } from "./pages/PhoneDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/phone/:idPhone" Component={PhoneDetail}></Route>
          <Route path="/shopping-cart" ></Route>
          <Route path="/access" ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
