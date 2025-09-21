import React from 'react';
import ReactDOM from 'react-dom/client'


const heading = React.createElement("h1", {id:"heading"}, "Hello world from inside div")
const heading1 = React.createElement("h2",{id:"heading2"},"Hello world from h2 tag")
const parent1 = React.createElement("div",{id:"child"},[heading,heading1]);
const heading0 = React.createElement("h1", {id:"heading0"}, "Hello world from inside div")
const heading2 = React.createElement("h2",{id:"heading3"},"Hello world from h2 tag")
const parent2 = React.createElement("div",{id:"child2"},[heading0,heading2]);
const parent =  React.createElement("div",{id:"parent"},[parent1,parent2]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

