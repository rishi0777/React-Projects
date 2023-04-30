import "./App.css";
import Header from "./Component/Header";
import Bookmark from "./Component/Bookmark";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarked" element={<Bookmark />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
