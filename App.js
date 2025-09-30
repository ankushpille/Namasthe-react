import React from 'react';
import ReactDOM from 'react-dom/client'

//jsx => React.createelement => js-object => htmlelement(render)
//react element
const reactHeading = (<h1 className='heading'>Hello ankush from jsx
</h1>)

console.log("reactHeading",reactHeading);

//1way
const HeadingComponent = () => {
    return <h1>Hello namsthe from functional component</h1>
}

//2way
const HeadingComponent2 = () => (
     <h1>Hello component 2 from functional</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2/>);

