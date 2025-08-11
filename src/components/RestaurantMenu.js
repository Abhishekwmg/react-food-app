import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/consts";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resFoodItem, setResFoodItem] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card?.info)
        setResFoodItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
    }

    if (!resInfo) return <Shimmer />;
    const { name, cuisines, costForTwo, avgRating, totalRatingsString, nudgeBanners, cloudinaryImageId, city, sla, areaName } = resInfo;
    const { itemCards } = resFoodItem.card.card;
    console.log(resFoodItem)

    return (
        <>
            <div className="restaurant-header">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + cloudinaryImageId}
                    alt="Restaurant Brand Image"
                    className="restaurant-banner"
                />
                <div className="restaurant-details">
                    <div>
                        <h1 className="restaurant-name">{name}</h1>
                        <p className="restaurant-cuisines">{cuisines}</p>
                        <p className="restaurant-location">{city}</p>
                    </div>
                    <div className="restaurant-info">
                        <div className="info-block">
                            ⭐ <span>{avgRating}</span>
                            <p>{totalRatingsString}</p>
                        </div>
                        <div className="info-block">
                            ⏱ <span>{areaName}, {city}</span>
                            <p>{sla.slaString}</p>
                        </div>
                        <div className="info-block">
                            ₹ <span>₹ {costForTwo / 100}</span>
                            <p>Cost for Two</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="food-list">
                <div key="" className="food-card">
                    {itemCards?.map((item) => {
                        let { info } = item?.card;
                        return <div key={info.id} className="divided">
                            <div className="food-info">
                                <h3 className="food-title">{info.name}</h3>
                                <div className="food-prices">
                                    <span className="discounted">₹ {info.defaultPrice / 100}</span>
                                </div>
                                <div className="food-rating">
                                    {info?.ratings?.aggregatedRating?.rating ? <span>{"⭐"}{info?.ratings?.aggregatedRating?.rating} {"("}{info?.ratings?.aggregatedRating?.ratingCountV2}{")"}</span> : null}
                                </div>
                                <p className="food-description">{info.description}</p>
                            </div>
                            <div className="food-image">
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + info.imageId} alt="Item Alt" />
                                <button className="add-btn">ADD</button>
                                <span className="customisable">Customisable</span>
                            </div>
                        </div>
                    })}

                </div>
            </div >
        </>
    )
}

export default RestaurantMenu;