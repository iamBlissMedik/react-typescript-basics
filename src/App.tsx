import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Input from "./components/Input";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

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
      {/* <Status status="success" />
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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["batman", "superman", "wonder woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            firstName: "Ellams",
            lastName: "Bliss",
          },
          {
            id: 2,
            firstName: "Ellams",
            lastName: "Bright",
          },
          {
            id: 3,
            firstName: "Ellams",
            lastName: "Brilliance",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
