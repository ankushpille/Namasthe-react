import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';


const Header = () => {
    return (
        <div className='Header'>
             <div className='Header-logo'>
                  <img  src='https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg'/>
             </div>

            <div className='nav-items'>
                   <ul>
                       <li>Home</li>
                       <li>About us</li>
                       <li>Contact us</li>
                       <li>Cart</li>
                    </ul>
            </div>
        </div>  
    )
}


const AppLayout = () => {
      return (
          <div className='applayout'>
              <Header/>
              
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

