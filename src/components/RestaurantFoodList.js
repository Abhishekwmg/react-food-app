import { useState } from "react";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantFoodList = (props) => {

    const dispatch = useDispatch();

    const handleAction = () => {
        dispatch(addItem("pizza"));
    }

    const { category } = props;
    return <>
        {category.map((c) => {
            let { title, itemCards } = c?.card?.card;
            return (
                <div className="mt-8" key={itemCards[0].card.info.id}>
                    <div className="flex justify-between cursor-pointer">
                        <span className="text-lg font-bold">{title} ({itemCards.length})</span>
                        <span>⬆️</span>
                    </div>
                    <ItemList itemCards={itemCards} onDispatch={handleAction} />
                </div>
            )
        })}
    </>
}

export default RestaurantFoodList;