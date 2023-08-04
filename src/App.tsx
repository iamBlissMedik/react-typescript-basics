import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const nameList = [
    {
      firstName: "Ellams",
      lastName: "Bliss",
    },
    {
      firstName: "Ellams",
      lastName: "Bright",
    },
    {
      firstName: "Ellams",
      lastName: "Brilliance",
    },
  ];
  const personName = {
    firstName: "Ellams",
    lastName: "Bliss",
  };
  return (
    <div className="App">
      <Greet name="Bliss" number={10} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
