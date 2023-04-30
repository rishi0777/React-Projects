import "./App.css";
import Menubar from "./Components/Menubar";
import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Body />
      <Sidebar />
    </div>
  );
}

export default App;
