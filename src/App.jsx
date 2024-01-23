import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/HomePage/HomePage";
import Navigation from "./Components/Navigation/Navigation";
import Redirect from "./Components/RedirectPage/RedirectPage";
import ClosePage from "./Components/ClosePage/ClosePage";
import OpenPage from "./Components/OpenPage/OpenPage";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/open" element={<OpenPage />} />
        <Route path="/close" element={<ClosePage />} />
      </Routes>
    </>
  );
}

export default App;
