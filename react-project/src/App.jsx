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
<<<<<<< HEAD
          <Navbar /> 
=======
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/itemDetails" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
            <Navbar />
          </Routes>
>>>>>>> ffad03e4aa61571d18594a14c238c8a2577a2cfe
        </header>

        <br />
        <Sidebar />

        <main className="main">
<<<<<<< HEAD
          <tasks dataState = {dataState} setDataState = {setDataState} />
=======
          <button className="main-button">To-do List</button>
          <tasks dataState={dataState} setDataState={setDataState} />
>>>>>>> ffad03e4aa61571d18594a14c238c8a2577a2cfe
          <Tasks data={dataState} deleteToDo={deleteToDo} />
        </main>

        <br />
        <Footer />
      </div>
    </>
  );
}
export default App;
