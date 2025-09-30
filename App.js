import React from 'react';
import ReactDOM from 'react-dom/client'


//react.createelement => js-object => htmlelement(render)
const heading = React.createElement('h1',{id: 'h1'},'hello this heading from react')
console.log("heading",heading);


//jsx => React.createelement => js-object => htmlelement(render)
const reactHeading = <h1>Hello ankush from jsx</h1>

console.log("reactHeading",reactHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactHeading);

