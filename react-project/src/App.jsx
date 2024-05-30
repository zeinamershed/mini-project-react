import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import tasksData from "./assets/tasks.json";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [dataState, setDataState] = useState(tasksData);
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Sidebar />
        <br />

        <main className="main">
          <button className="main-button">To-do List</button>
          <tasks dataState = {dataState} setDataState = {setDataState} />
        </main>

        <br />
        <Footer />
      </div>
      <Tasks props={dataState} />
    </>
  );
}
export default App;
