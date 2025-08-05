const RestaurantCard = (props) => {
    const { image, title, cuisine, rating, delivery, price } = props.resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={image} />
            <h3 className="res-title">{title}</h3>
            <h4 className="res-cuisine">{cuisine}</h4>
            <div className="res-meta">
                <h4 className="res-rating">{rating}</h4>
                <h4 className="res-delivery">{delivery}</h4>
                <h4 className="res-price">{price}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;