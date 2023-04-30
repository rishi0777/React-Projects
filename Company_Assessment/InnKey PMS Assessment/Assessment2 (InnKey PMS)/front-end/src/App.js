import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import GlobalConfig from "./Components/Content/GlobalConfig";
import Traffic from "./Components/Content/Traffic";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/globalConfig" element={<GlobalConfig />} />
        <Route path="/login/traffic" element={<Traffic />} />
      </Routes>
    </Router>
  );
}

export default App;
