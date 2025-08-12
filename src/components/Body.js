import { useState, useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


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
        console.log(restD);
        setAllRestaurants(restD);
        setFilterList(restD);
    }

    function handleSearch() {
        const searchFiltered = filterList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterList(searchFiltered);
    }

    if (filterList.length === 0) return <Shimmer />

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder='search for any item' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="search" onClick={handleSearch}>Search</button>
            </div>
            <div className='filter-btn'>
                <button className="filter-btnbtn" onClick={handleFilterList}>Filter</button>
            </div>
            <div className="res-container">
                {filterList.map((d) => {
                    console.log(d);
                    return <Link to={"/restaurants/" + d.info.id} key={d.info.id}>
                        <RestaurantCard resData={d.info} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;