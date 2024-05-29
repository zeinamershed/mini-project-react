import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Tasks from "./assets/tasks.json"

function App() {
  return (
    <>
    <div className="App">

      <header>
        <Navbar />
      </header>

      <br />

      <main className="main">
        <button className="main-button">To-do List</button>
      </main>

      <br />
      <Footer />
      </div>
    </>
  );
}
export default App;