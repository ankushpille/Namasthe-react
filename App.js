import React from 'react';
import ReactDOM from 'react-dom/client'


const heading = React.createElement('h1',{id: 'h1'},'hello this heading from react')
console.log("heading",heading);


const reactHeading = <h1>Hello ankush from jsx</h1>

console.log("reactHeading",reactHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactHeading);

