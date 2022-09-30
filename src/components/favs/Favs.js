import React from "react";
// import "./allProducts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../../store/Actions";
import initialState from "../../store/Reducer";

export default function Favs() {
  const dispatch = useDispatch();
  let [favList, setFavList] = useState(
    useSelector((state) => state.favourites)
  );
  let [authenticated, setAuthenticated] = useState(true);
  let [showTitle, setShowTitle] = useState(true);
  let [showPrice, setShowPrice] = useState(true);
  let [showDetails, setShowDetails] = useState(false);

  let toggleDetails = (productId) => {
    let newProducts = favList.filter((product) => {
      if (product.id == productId) {
        product.isVisible = !product.isVisible;
      }
      return product;
    });
    setFavList(newProducts);
  };

  return (
    <div>
      {authenticated ? (
        <div className="row">
          {favList.map((device) => (
            <div className="col">
              <div className="card" style={{ width: "15rem" }}>
                <img
                  className="card-img-top"
                  src={device.category.image}
                  alt="product image"
                />
                <div className="card-body">
                  {!device.isVisible && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`allProducts/details/${device.id}`}
                    >
                      <h5 className="card-title">{device.title}</h5>
                    </Link>
                  )}
                  {!device.isVisible && (
                    <p className="price">
                      <strong>$</strong>
                      <span> {device.price}</span>
                    </p>
                  )}
                  {device.isVisible && (
                    <p className="card-text">{device.description}</p>
                  )}
                  <div className="btn-wrapper">
                    <button
                      className="btn-details btn  btn-primary"
                      onClick={() => {
                        toggleDetails(device.id);
                      }}
                    >
                      {device.isVisible ? "Hide Details" : "Show Details"}
                    </button>
                    {/*<button
                      className="btn-details btn-second  btn  btn-primary"
                      onClick={() => {
                        dispatch(removeFav(device));
                        setFavList(favList);
                      }}
                    >
                      Remove
                    </button>*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container not-found">
          <p>Products are not available</p>
        </div>
      )}
    </div>
  );
}
