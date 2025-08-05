import { useState } from 'react'
import resData from '../utils/data'
import RestaurantCard from '../components/RestaurantCard'

const Body = () => {
    const [filterList, setFilterList] = useState(resData);

    function handleFilterList() {
        // const filtered = 
        setFilterList(() => {
            return filterList.filter((res) => res.rating > 4)
        })
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className='filter-btn'>
                <button className="filter-btnbtn" onClick={handleFilterList}>Filter</button>
            </div>
            <div className="res-container">
                {filterList.map((d) => {
                    return <RestaurantCard resData={d} key={d.image} />
                })}
            </div>
        </div>
    )
}

export default Body;