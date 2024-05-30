import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import tasksData from "./assets/tasks.json";
import Tasks from "./components/Tasks";
import DashBoard from "./pages/DashBoard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";
import { useState } from "react";

function App() {
  const [dataState, setDataState] = useState(tasksData);

  function deleteToDo(toDoTask) {
    const filteredToDos = dataState.filter((currentElement) => {
      if (currentElement.task !== toDoTask) {
        return true;
      }
    });
    setDataState(filteredToDos);
  }

  return (
    <>
      <div className="App">
        <header>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/itemDetails" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
            <Navbar />
          </Routes>
        </header>
        <br />

        <main className="main">
          <button className="main-button">To-do List</button>
          <tasks dataState={dataState} setDataState={setDataState} />
          <Tasks data={dataState} deleteToDo={deleteToDo} />
        </main>

        <br />
        <Footer />
      </div>
    </>
  );
}
export default App;
