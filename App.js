import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';



const RestoCard = (props) => {
    const {resobj} = props
    const {name,cuisine,rating,deliveryTime,costForTwo} = resobj
    console.log(name)
    console.log(name)
     return (
        <div className='resto-card'>
            <img alt='restaurant-logo' src={props.image} />
            <h3>{name}</h3>
            <h4>{cuisine.join(',')}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>₹{costForTwo} For two</h4>
        </div>
     )
}


const resList = [
  {
    "id": "kfc123",
    "name": "KFC",
    "cuisine": ["American", "Fast Food", "Burgers"],
    "rating": 4.2,
    "deliveryTime": 30,
    "costForTwo": 450,
    "imageUrl": "https://res.cloudinary.com/kfc-image.jpg"
  },
  {
    "id": "dominos456",
    "name": "Domino's Pizza",
    "cuisine": ["Italian", "Pizza", "Fast Food"],
    "rating": 4.4,
    "deliveryTime": 25,
    "costForTwo": 500,
    "imageUrl": "https://res.cloudinary.com/dominos-pizza.jpg"
  },
  {
    "id": "mcd789",
    "name": "McDonald's",
    "cuisine": ["American", "Burgers", "Fast Food"],
    "rating": 4.1,
    "deliveryTime": 20,
    "costForTwo": 400,
    "imageUrl": "https://res.cloudinary.com/mcdonalds.jpg"
  },
  {
    "id": "bbq001",
    "name": "Barbeque Nation",
    "cuisine": ["Indian", "BBQ", "Buffet"],
    "rating": 4.5,
    "deliveryTime": 40,
    "costForTwo": 1200,
    "imageUrl": "https://res.cloudinary.com/bbq-nation.jpg"
  },
  {
    "id": "pizzahut002",
    "name": "Pizza Hut",
    "cuisine": ["Italian", "Pizza", "Fast Food"],
    "rating": 4.0,
    "deliveryTime": 28,
    "costForTwo": 550,
    "imageUrl": "https://res.cloudinary.com/pizza-hut.jpg"
  },
  {
    "id": "subway003",
    "name": "Subway",
    "cuisine": ["Healthy", "Sandwiches", "Salads"],
    "rating": 4.3,
    "deliveryTime": 22,
    "costForTwo": 350,
    "imageUrl": "https://res.cloudinary.com/subway.jpg"
  },
  {
    "id": "biryani004",
    "name": "Paradise Biryani",
    "cuisine": ["Indian", "Hyderabadi", "Biryani"],
    "rating": 4.6,
    "deliveryTime": 35,
    "costForTwo": 700,
    "imageUrl": "https://res.cloudinary.com/paradise-biryani.jpg"
  },
  {
    "id": "chai005",
    "name": "Chai Point",
    "cuisine": ["Tea", "Snacks", "Indian"],
    "rating": 4.2,
    "deliveryTime": 15,
    "costForTwo": 250,
    "imageUrl": "https://res.cloudinary.com/chai-point.jpg"
  },
  {
    "id": "wow006",
    "name": "Wow! Momo",
    "cuisine": ["Chinese", "Tibetan", "Snacks"],
    "rating": 4.1,
    "deliveryTime": 27,
    "costForTwo": 300,
    "imageUrl": "https://res.cloudinary.com/wow-momo.jpg"
  },
  {
    "id": "starbucks007",
    "name": "Starbucks",
    "cuisine": ["Cafe", "Coffee", "Bakery"],
    "rating": 4.5,
    "deliveryTime": 18,
    "costForTwo": 600,
    "imageUrl": "https://res.cloudinary.com/starbucks.jpg"
  }
]




const Body = () => {
     return (
      <div className='body-container'>
        <div className='search'>Search</div>
        {
                resList.map((restaurant => (
                    <RestoCard key={restaurant.id} resobj={restaurant} image="https://www.citypng.com/public/uploads/preview/domino039s-pizza-logo-hd-transparent-background-735811696675648utxbcdqal9.png"/>
                )))
            
          }
            
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

