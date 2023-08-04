import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    firstName: "Ellams",
    lastName: "Bliss",
  };
  return (
    <div className="App">
      <Greet name="Bliss" number={10} isLoggedIn={true} />
      <Person personName={personName} />
    </div>
  );
}

export default App;
