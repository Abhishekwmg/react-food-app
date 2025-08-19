const RestaurantMenuHeader = (props) => {
    const { name, cuisines, costForTwo, avgRating, totalRatingsString, nudgeBanners, cloudinaryImageId, city, sla, areaName } = props.data;
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-gray-200 pb-6">
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="Restaurant Brand Image"
                className="w-full md:w-64 h-40 object-cover rounded-lg shadow"
            />

            <div className="flex-1">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                    <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
                    <p className="text-gray-500 text-sm">{city}</p>
                </div>

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
    )
}

export default RestaurantMenuHeader;