import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../../../../icons/Icon";

const MoreNewProducts = () => {
  const { filteredDatas, loading, error } = useSelector(
    (state) => state.moresale
  );
  const arr = filteredDatas?.slice(18, 20);
  return (
    <>
      {loading && "fetching data"}
      {error && error}
      <div className="moreFirstProducts">
        <div className="contentproduct-container">
          <div className="contentproduct-grid">
            {arr?.map((moreproduct) => (
              <div key={moreproduct.id} className="contentproduct-gridData">
                <div className="cartProduct">
                  <div className="cart-cartProduct">
                    <div className="cart-cartProductPadding">
                      {/* <div className="cart-cartProductLogo">
                        <div className="cart-cashdiscount">
                          <div className="cart-cashImage"></div>
                          <span className="cart-cashText">{moreproduct.surpriz}</span>
                        </div>
                      </div> */}
                      <div className="cart-like">
                        <button className="like-button ">
                          <Icon name="cartLike" />
                        </button>
                      </div>
                      <Link to="/mehsul">
                        <div className="cartinner-image">
                          <div className="cartinnerImage-container">
                            <div className="cartinner-imageOwn">
                              <img src={moreproduct.imageUrl} />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="cartProduct-name">
                        <Link to="mehsul">
                          <div>
                            <Icon name="cartDat" />
                            <p>{moreproduct.brands}</p>
                          </div>
                        </Link>
                        <Link to="mehsul">
                          <h3>{moreproduct.productName}</h3>
                        </Link>
                      </div>
                      <Link to="mehsul">
                        <div className="manat-month">
                          <div className="cartAmount">
                            <div className="manat">
                              <div>
                                <p>{moreproduct.price} <Icon name="cartManat"/></p>
                              </div>
                            </div>
                            <div className="cartAmount-month">
                              <p>{moreproduct.month}ay </p>
                              <p>
                                {moreproduct.creditPrice}.
                                {moreproduct.creditDatPrice}
                                <Icon name="cartManat"/>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="product-buyNowContainer">
                        <button>indi al</button>
                        <div className="cart-cartIconSbt">
                        <button>
                             <BsFillBasketFill fill="green" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreNewProducts;
