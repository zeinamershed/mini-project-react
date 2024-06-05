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
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);


  function deleteToDo(toDoTask) {
    const filteredToDos = dataState.filter((currentElement) => {
      if (currentElement.task !== toDoTask) {
        return true;
      }
    });

    setDataState(filteredToDos);
  }
  const addTask = () => {
    if (newTask.trim() !== "") {
      setDataState([...dataState, { task: newTask, completed: false }]);
      setNewTask("");
      setShowInput(false);
    }
  };

  return (
    <>
      <div className="App">
        <header>
          <Navbar /> 
          <Sidebar />

        <br />
        

          <Routes>
            <Route path="/" element={<DashBoard dataState={dataState} deleteToDo={deleteToDo}/> } />
            <Route path="/About" element={<About />} />
            <Route path="/itemDetails" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>

        <br />
        <div className="add-task-container">
            {showInput && (
              <>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter new task"
                  className="add-task-input"
                />
                <button className="save-button" onClick={addTask}>
                  Save Task
                </button>
              </>
            )}
            {!showInput && (
              <button
                className="add-button"
                onClick={() => setShowInput(true)}
              >
                Add Task
              </button>
            )}
          </div>
        
        <Footer />
      </div>
    </>
  );
}
export default App;
