import { useState, useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Offline from './Offline';


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [search, setSearch] = useState('');

    function handleFilterList() {

        const filtered = allRestaurants.filter((res) => res.info.avgRating > 4);
        setFilterList(filtered);
    }

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const js = await data.json();
        // console.log(js);
        const restD = js?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        setAllRestaurants(restD);
        setFilterList(restD);
    }

    function handleSearch() {
        const searchFiltered = filterList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterList(searchFiltered);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <Offline />

    if (filterList.length === 0) return <Shimmer />

    return (
        <div className="body">
            <div className='filter flex items-center'>
                <div className="search m-4 p-4">
                    <input className="border border-solid border-black" type="text" placeholder='search for any item' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-md" onClick={handleSearch}>Search</button>
                </div>
                <div className='px-4 py-1 bg-gray-100 rounded-md'>
                    <button onClick={handleFilterList}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterList.map((d) => {
                    return <Link to={"/restaurants/" + d.info.id} key={d.info.id}>
                        <RestaurantCard resData={d.info} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;