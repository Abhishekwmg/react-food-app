import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resFoodItem, setResFoodItem] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=833156&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card?.info)
        setResFoodItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
    }

    if (resInfo === null) return <Shimmer />;
    console.log(resFoodItem, "Loading food items");
    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, nudgeBanners } = resInfo;
    // console.log(name, cuisines, costForTwoMessage, avgRating, totalRatingsString, nudgeBanners);

    // console.log(resInfo);

    return (
        // <div className="menu">
        //     {/* <h1>{resInfo.name}</h1>
        //     <h2>{resInfo.cuisines.join(", ")}</h2>
        //     <p>{resInfo.costForTwoMessage}</p>
        //     <p>{resInfo.avgRating}</p>
        //     <ul>
        //         {cuisines.map(cuisine => {
        //             return <li>{cuisine}</li>
        //         })}
        //         <li>Biryani</li>
        //         <li>Pizza</li>
        //         <li>Pasta</li>
        //         <li>Fried Rice</li>
        //         <li>Chicken Roast</li>
        //     </ul> */}
        //     <div className="page-link">
        //         <p>Home / Delhi / Olio - The Wood Fired Pizza</p>
        //     </div>
        //     <div className="res-title">
        //         <h1>Olio - The Wood Fired Pizza</h1>
        //     </div>
        //     <div className="res-details">
        //         <p>4.4 | 300 for two</p>
        //     </div>
        //     <div className="food-items">
        //         <ul className="items">
        //             <li className="item">
        //                 <div className="item-prof">
        //                     <p>8-Cheese Pizza</p>
        //                     <p>399 Rs.</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
        //                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //                 </div>
        //                 <div className="food-prof">
        //                     <img src="" alt="food-image" />
        //                     <button className="">Add</button>
        //                     <p className="">Customizable</p>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
        <div className="food-list">
            <div key="" className="food-card">
                <div className="food-info">
                    <h3 className="food-title">Food Name</h3>
                    <div className="food-prices">
                        <span className="original">₹ Original Price</span>
                        <span className="discounted">₹ Discounted Price</span>
                    </div>
                    <div className="food-rating">
                        ⭐ Item Rating <span>Item Review</span>
                    </div>
                    <p className="food-description">Item Description</p>
                </div>
                <div className="food-image">
                    <img src="Item Image" alt="Item Alt" />
                    <button className="add-btn">ADD</button>
                    <span className="customisable">Customisable</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;