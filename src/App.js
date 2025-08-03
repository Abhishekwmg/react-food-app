const resData = [
  {
    "image": "https://media.cnn.com/api/v1/images/stellar/prod/210211141204-05-classic-italian-dishes.jpg?q=w_5313,h_2988,x_0,y_0,c_fill",
    "title": "Indian Accent",
    "cuisine": "Modern Indian",
    "rating": "4.9⭐",
    "delivery": "30 min",
    "price": "₹7,500 for two"
  },
  {
    "image": "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
    "title": "Bukhara",
    "cuisine": "North Indian / Tandoori / Kebabs",
    "rating": "4.8⭐",
    "delivery": "45 min",
    "price": "₹5,000 for two"
  },
  {
    "image": "https://blog.swiggy.com/wp-content/uploads/2024/03/Puri-Aloo-1024x538.png",
    "title": "Karim’s",
    "cuisine": "Mughlai / Indian",
    "rating": "4.6⭐",
    "delivery": "40 min",
    "price": "₹800 for two"
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VNpuYJSalptzvz7-r_hPCdM0jaknr5aEwWOvWRkCKDSUshwu9uNriT1dYBOaSn3wb7Q&usqp=CAU",
    "title": "Moti Mahal",
    "cuisine": "Punjabi / North Indian",
    "rating": "4.5⭐",
    "delivery": "35 min",
    "price": "₹1,200 for two"
  },
  {
    "image": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg",
    "title": "The Big Chill Café",
    "cuisine": "Italian / Café",
    "rating": "4.4⭐",
    "delivery": "25 min",
    "price": "₹1,000 for two"
  },
  {
    "image": "https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg",
    "title": "INJA",
    "cuisine": "Indian–Japanese Fusion",
    "rating": "4.5⭐",
    "delivery": "50 min",
    "price": "₹3,500 for two"
  },
  {
    "image": "https://i.pinimg.com/originals/f8/0a/f0/f80af0db86458725e2a1745d06a93392.jpg",
    "title": "Loya",
    "cuisine": "North Indian & Regional Specialties",
    "rating": "4.4⭐",
    "delivery": "45 min",
    "price": "₹4,000 for two"
  },
  {
    "image": "https://nfcihospitality.com/wp-content/uploads/2024/09/Samosa-Indian-Food.jpg",
    "title": "Flow Brew & Dine",
    "cuisine": "Indian, Mediterranean, Asian",
    "rating": "4.3⭐",
    "delivery": "30 min",
    "price": "₹1,800 for two"
  },
  {
    "image": "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    "title": "Amoda",
    "cuisine": "North Indian (Fine-Dining)",
    "rating": "4.6⭐",
    "delivery": "60 min",
    "price": "₹3,000 for two"
  },
  {
    "image": "https://cdn.architecturaldigest.in/wp-content/uploads/2023/06/saddle-house.jpg",
    "title": "The Saddle House",
    "cuisine": "Pan‑Asian & Continental",
    "rating": "4.5⭐",
    "delivery": "55 min",
    "price": "₹2,800 for two"
  },
  {
    "image": "https://cdn.architecturaldigest.in/wp-content/uploads/2023/06/cafe-green-lane.jpg",
    "title": "Café Green Lane",
    "cuisine": "Elevated Indian Street Food",
    "rating": "4.4⭐",
    "delivery": "45 min",
    "price": "₹1,500 for two"
  }
]


const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const Header = () => {
  return <div className="header">
    <div className="logo-container">
      <img className="logo" src="assets/food-logo.png" alt="food-logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
}


const RestaurantCard = (props) => {
  const { image, title, cuisine, rating, delivery, price } = props.resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <h3 className="res-title">{title}</h3>
      <h4 className="res-cuisine">{cuisine}</h4>
      <div className="res-meta">
        <h4 className="res-rating">{rating}</h4>
        <h4 className="res-delivery">{delivery}</h4>
        <h4 className="res-price">{price}</h4>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((d) => {
          return <RestaurantCard resData={d} key={d.image} />
        })}
      </div>
    </div>
  )
}


export default AppLayout;