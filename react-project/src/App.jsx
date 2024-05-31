import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import tasksData from "./assets/tasks.json";
import Tasks from "./components/Tasks";
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
          <Navbar /> 
        </header>

        <br />
        <Sidebar />

        <main className="main">
          <tasks dataState = {dataState} setDataState = {setDataState} />
          <Tasks data={dataState} deleteToDo={deleteToDo} />
        </main>

        <br />
        <Footer />
      </div>
    </>
  );
}
export default App;
