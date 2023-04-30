import Navbar from "./Components/Navbar";
import { Textarea } from "./Components/Textarea";
import { About } from "./Components/About";
import { Alert } from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  let [alertOnScreen, setAlertOnScreen] = useState(false);
  const [alert, setAlert] = useState(null);
  let timeout;

  const showAlert = (type, mssg) => {
    setAlert({ type: type, message: mssg });
  };

  const removeAlert = () => {
    timeout = setTimeout(() => {
      // console.log("alert");
      setAlert(null);
    }, 2000);
  };

  const toggleTheme = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("success", "Dark mode is enabled");

      if (alert !== null) {
        clearTimeout(timeout);
      } else removeAlert();
    } else {
      setMode("light");
      document.body.style.background = "#FFF";
      showAlert("success", "Light mode is enabled");

      if (alert !== null) {
        clearTimeout(timeout);
      } else removeAlert();
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Textarea
                alert={alert}
                setAlert={setAlert}
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
