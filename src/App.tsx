import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Ellams",
    lastName: "Bliss",
  };
  return (
    <div className="App">
      <Greet name="Bliss" number={10} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList />
    </div>
  );
}

export default App;
