import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantFoodList = (props) => {

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
                    <ItemList itemCards={itemCards} />
                </div>
            )
        })}
    </>
}

export default RestaurantFoodList;