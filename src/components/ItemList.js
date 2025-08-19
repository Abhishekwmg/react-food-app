import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props, onDispatch) => {

    const { itemCards } = props;
    return (
        <div className="mt-6 space-y-6">
            {itemCards?.map((item) => {
                let { info } = item?.card;
                return (
                    <div
                        className="flex justify-between items-start border-b border-gray-100 pb-6"
                        key={info.id} >
                        <div className="flex-1 pr-4">
                            <h3 className="text-base font-medium text-gray-900">{info.name}</h3>
                            <div className="text-sm font-semibold text-gray-800">
                                ₹ {info.defaultPrice / 100 || info.price / 100}
                            </div>
                            {info?.ratings?.aggregatedRating?.rating && (
                                <div className="text-xs text-gray-600 mt-1">
                                    ⭐ {info.ratings.aggregatedRating.rating} ({info.ratings.aggregatedRating.ratingCountV2})</div>
                            )}
                            <p className="text-gray-500 text-sm mt-2">{info.description}</p>
                        </div>

                        <div className="w-28 flex flex-col items-center">
                            {info.imageId && (
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`}
                                    alt={info.name}
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                            )}
                            <button onClick={onDispatch} className="mt-2 w-full bg-white text-green-600 border border-green-600 text-sm font-semibold py-1 rounded hover:bg-green-50">
                                ADD
                            </button>
                            {info.isCustomisable && (
                                <span className="mt-1 text-[10px] text-gray-500">Customisable</span>
                            )}
                        </div>
                    </div>

                );
            })}
        </div>
    )
}


export default ItemList;