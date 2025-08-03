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


const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Foods</h3>

    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  )
}


export default AppLayout;