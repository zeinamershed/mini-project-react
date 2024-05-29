import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="App">
        <h1>Calendar App</h1>
        
      </div>
      <Footer />
    </>
  );
}
export default App;