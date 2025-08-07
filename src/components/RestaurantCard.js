const RestaurantCard = (props) => {
    // console.log(props)
    const { avgRating, cuisines, name, costForTwo, cloudinaryImageId } = props.resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + cloudinaryImageId} />
            <h3 className="res-title">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(",")}</h4>
            <div className="res-meta">
                <h4 className="res-rating">{avgRating}</h4>
                {/* <h4 className="res-delivery">{delivery}</h4> */}
                <h4 className="res-price">{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;

//avgRating, cuisines, name, sla.deliveryTime, sla.slaString, costForTwo, cloudinaryImageId
//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ +  "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/bcf8c370-cde1-43b4-8b25-d24a8cdef0ad_368180.JPG"