import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {

    const [accordion, setAccordion] = useState(false);

    const { resId } = useParams();

    const [resInfo, resFoodItem, categories] = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;
    const { name, cuisines, costForTwo, avgRating, totalRatingsString, nudgeBanners, cloudinaryImageId, city, sla, areaName } = resInfo;
    // const { itemCards } = resFoodItem.card.card;
    const { itemCards } = resFoodItem?.card?.card;

    const category = categories.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(category);

    function handleAccordion(index) {
        setAccordion((prev) => prev === index ? null : index);
    }

    return (
        <>
            {/* <div className="restaurant-header">
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
            </div > */}
            <div className="max-w-5xl mx-auto p-4">
                {/* Restaurant Header */}
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-gray-200 pb-6">
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                        alt="Restaurant Brand Image"
                        className="w-full md:w-64 h-40 object-cover rounded-lg shadow"
                    />

                    <div className="flex-1">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                            <p className="text-gray-600 text-sm">{cuisines}</p>
                            <p className="text-gray-500 text-sm">{city}</p>
                        </div>

                        {/* Restaurant Info */}
                        <div className="flex flex-wrap gap-6 mt-4 text-sm">
                            <div className="flex flex-col items-start">
                                <span className="font-semibold text-green-600 flex items-center gap-1">
                                    ⭐ {avgRating}
                                </span>
                                <p className="text-gray-500">{totalRatingsString}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-semibold flex items-center gap-1">
                                    ⏱ {sla.slaString}
                                </span>
                                <p className="text-gray-500">{areaName}, {city}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-semibold flex items-center gap-1">
                                    ₹ {costForTwo / 100}
                                </span>
                                <p className="text-gray-500">Cost for Two</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Food List */}
                {category.map((c, index) => {
                    let { itemCards } = c?.card?.card;
                    return (
                        <div className="mt-8" key={itemCards[0].card.info.id}>
                            <div onClick={() => handleAccordion(index)}>
                                <h1 className="text-lg font-bold">{c?.card?.card?.title} ({itemCards.length})</h1>
                            </div>
                            {accordion === index && <div className="mt-6 space-y-6">
                                {itemCards?.map((item) => {
                                    let { info } = item?.card;
                                    return (
                                        <div
                                            key={info.id}
                                            className="flex justify-between items-start border-b border-gray-100 pb-6"
                                        >
                                            {/* Food Info */}
                                            <div className="flex-1 pr-4">
                                                <h3 className="text-base font-medium text-gray-900">{info.name}</h3>
                                                <div className="text-sm font-semibold text-gray-800">
                                                    ₹ {info.defaultPrice / 100 || info.price / 100}
                                                </div>
                                                {info?.ratings?.aggregatedRating?.rating && (
                                                    <div className="text-xs text-gray-600 mt-1">
                                                        ⭐ {info.ratings.aggregatedRating.rating} ({info.ratings.aggregatedRating.ratingCountV2})</div>
                                                )}
                                                <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                                            </div>

                                            {/* Food Image & Button */}
                                            <div className="w-28 flex flex-col items-center">
                                                {info.imageId && (
                                                    <img
                                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`}
                                                        alt={info.name}
                                                        className="w-full h-24 object-cover rounded-lg"
                                                    />
                                                )}
                                                <button className="mt-2 w-full bg-white text-green-600 border border-green-600 text-sm font-semibold py-1 rounded hover:bg-green-50">
                                                    ADD
                                                </button>
                                                {info.isCustomisable && (
                                                    <span className="mt-1 text-[10px] text-gray-500">Customisable</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>}
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default RestaurantMenu;