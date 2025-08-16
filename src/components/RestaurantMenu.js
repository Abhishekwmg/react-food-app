import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState, useEffect } from "react";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
import RestaurantFoodList from "./RestaurantFoodList";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [resInfo, resFoodItem, categories] = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    const category = categories.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <>
            <div className="max-w-5xl mx-auto p-4">
                <RestaurantMenuHeader data={resInfo} />
                <RestaurantFoodList category={category} />
            </div>

        </>
    )
}

export default RestaurantMenu;