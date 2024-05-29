import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


import Tasks from "./assets/tasks.json"

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="App">
        <h1>To Do App</h1>
        
        
      </div>
      <Footer />
      <Tasks />
    </>
  );
}
export default App;