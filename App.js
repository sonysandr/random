const parent = React.createElement("div", { id: "main" }, [ //the main array for children of parent
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I AM THE h1"), //we make use an array for making sibilings using sqaure brackets
    React.createElement("h2", {}, "I AM THE h2"), //we make it into an array
  ]),

  React.createElement("div", { id: "child2 " }, [
    React.createElement("h1", {}, "I AM THE h1 child 2"), //we make use an array for making sibilings using sqaure brackets
    React.createElement("h2", {}, "I AM THE h2 child 2"), //we make it into an array
  ]),
]);

// we use the [React.createElement()] to make an h1 tag with "hello world from react inside it" - its creates an object
// {} this object is where we give attributes to our tags
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "kingqueen" },
  "Hello world from react "
);
console.log(heading); // object
// now we create a root for our react, where all our code is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
// we can render the heading object in to our root
root.render(parent);
