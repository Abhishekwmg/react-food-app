// const RestaurantCard = (props) => {
//     console.log(props)
//     const { avgRating, cuisines, name, costForTwo, cloudinaryImageId } = props.resData;
//     return (
//         <div className="m-4 p-4 w-48">
//             <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + cloudinaryImageId} />
//             <h3 className="res-title">{name}</h3>
//             <h4 className="res-cuisine">{cuisines.join(",")}</h4>
//             <div className="res-meta">
//                 <h4 className="res-rating">{avgRating}</h4>
{/* <h4 className="res-delivery">{delivery}</h4> */ }
{/* <h4 className="res-price">{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard; */}


const RestaurantCard = (props) => {
    const { avgRating, cuisines, name, costForTwo, cloudinaryImageId } = props.resData;

    return (
        <div className="m-4 w-60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white cursor-pointer border border-gray-100">
            {/* Image */}
            <img
                className="w-full h-40 object-cover"
                alt={name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />

            {/* Details */}
            <div className="p-4 space-y-1">
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>

                {/* Cuisines */}
                <h4 className="text-sm text-gray-500 truncate">
                    {cuisines.join(", ")}
                </h4>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <span className="flex items-center gap-1">
                        ⭐ {avgRating}
                    </span>
                    <span>•</span>
                    <span>{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;


//avgRating, cuisines, name, sla.deliveryTime, sla.slaString, costForTwo, cloudinaryImageId
//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ +  "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/bcf8c370-cde1-43b4-8b25-d24a8cdef0ad_368180.JPG"