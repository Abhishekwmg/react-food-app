import { useState, useEffect } from 'react';
import { MENU_API } from './consts';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [resFoodItem, setResFoodItem] = useState(null);
    const [categories, setCategories] = useState(null);


    useEffect(() => {
        fetchData();
    }, [resId])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        setResFoodItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
        setCategories(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return [resInfo, resFoodItem, categories];
}


export default useRestaurantMenu;