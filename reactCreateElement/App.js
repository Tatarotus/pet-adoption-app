const Pet = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", { id: "main" }, [
    React.createElement("h1", null, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
      
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
