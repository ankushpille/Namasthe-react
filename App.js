const heading = React.createElement("h1", {}, "Hello world from inside div")
const parent1 = React.createElement("div",{},heading);
const parent =  React.createElement("div",{},parent1);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

