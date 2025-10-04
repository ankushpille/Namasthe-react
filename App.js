import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';



const RestoCard = (props) => {
    const {name,cuisine,rating,deliveryTime,costForTwo} = props.resobj.restaurant
    console.log(name)
     return (
        <div className='resto-card'>
            <img alt='restaurant-logo' src={props.image} />
            <h3>{name}</h3>
            <h4>{cuisine.join(",")}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>₹{costForTwo} For two</h4>
        </div>
     )
}


const kfcresObj = {
  "restaurant": {
    "id": "kfc123",
    "name": "KFC",
    "cuisine": ["American", "Fast Food", "Burgers"],
    "rating": 4.2,
    "reviews": 1250,
    "deliveryTime": 30,
    "costForTwo": 450,
    "imageUrl": "https://res.cloudinary.com/kfc-image.jpg",
    "address": {
      "street": "MG Road",
      "city": "Hyderabad",
      "state": "Telangana",
      "pincode": "500081"
    },
    "menu": [
      {
        "id": "menu1",
        "name": "Zinger Burger",
        "description": "Spicy chicken patty with lettuce and mayo",
        "price": 150,
        "imageUrl": "https://res.cloudinary.com/kfc-zinger.jpg",
        "category": "Burgers"
      },
      {
        "id": "menu2",
        "name": "Bucket of 8 Hot Wings",
        "description": "Hot and crispy chicken wings",
        "price": 400,
        "imageUrl": "https://res.cloudinary.com/kfc-wings.jpg",
        "category": "Chicken"
      },
      {
        "id": "menu3",
        "name": "Popcorn Chicken",
        "description": "Crunchy bite-sized chicken pieces",
        "price": 200,
        "imageUrl": "https://res.cloudinary.com/kfc-popcorn.jpg",
        "category": "Snacks"
      },
      {
        "id": "menu4",
        "name": "French Fries",
        "description": "Classic crispy fries",
        "price": 80,
        "imageUrl": "https://res.cloudinary.com/kfc-fries.jpg",
        "category": "Sides"
      },
      {
        "id": "menu5",
        "name": "Pepsi 500ml",
        "description": "Refreshing soft drink",
        "price": 50,
        "imageUrl": "https://res.cloudinary.com/kfc-pepsi.jpg",
        "category": "Beverages"
      }
    ]
  }
}


const Body = () => {
     return (
      <div className='body-container'>
        <div className='search'>Search</div>
        {/* <RestoCard restroName="MFC" cuisine="biryani,kababs,shwarma" distance="35minus" rating="4.2*" image='https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=1200&q=75'/> */}
        <RestoCard resobj={kfcresObj} image="https://www.shutterstock.com/shutterstock/photos/2194700031/display_1500/stock-photo-lopburi-thai-august-have-lunch-at-kfc-restaurant-box-zinger-burger-and-fried-chicken-set-2194700031.jpg"/>
      </div>

     )
}
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
              <Body/>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

