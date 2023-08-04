import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  // const nameList = [
  //   {
  //     firstName: "Ellams",
  //     lastName: "Bliss",
  //   },
  //   {
  //     firstName: "Ellams",
  //     lastName: "Bright",
  //   },
  //   {
  //     firstName: "Ellams",
  //     lastName: "Brilliance",
  //   },
  // ];
  // const personName = {
  //   firstName: "Ellams",
  //   lastName: "Bliss",
  // };
  return (
    <div className="App">
      {/* <Greet name="Bliss" number={10} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} /> */}
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to school</Heading>
      </Oscar>
      <Greet name="Bliss" number={10} isLoggedIn={true} />
      <Button handleClick={(event, id) => console.log("clicked")} />
      <Input
        handleChange={(event) => console.log(event.target.value)}
        value=""
      />
    </div>
  );
}

export default App;
