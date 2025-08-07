import { useState, useEffect } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import Shimmer from './Shimmer';

const Body = () => {
    const [filterList, setFilterList] = useState([]);
    const [search, setSearch] = useState('');

    function handleFilterList() {
        // const filtered = 
        setFilterList(() => {
            return filterList.filter((res) => res.info.avgRating > 4)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const js = await data.json();
        // console.log(js);
        setFilterList(js?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function handleSearch() {
        const searchFiltered = filterList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterList(searchFiltered);
    }

    return filterList.length === 0 ? <Shimmer /> : (
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
                    console.log(d)
                    return <RestaurantCard resData={d.info} key={d.info.id} />
                })}
            </div>
        </div>
    )
}

export default Body;