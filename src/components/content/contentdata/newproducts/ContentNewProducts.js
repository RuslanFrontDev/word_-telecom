import React, { useEffect, useRef, useState } from "react";
import Cash from "../../../../logo/cash.svg";
import { BsFillBasketFill } from "react-icons/bs";
import { Icon } from "../../../../icons/Icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moreproductsFetch } from "../../../../redux/stores/features/moresale";
import MoreNewProducts from "./morenewproducts/MoreNewProducts";
const ContentNewProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moreproductsFetch());
  }, [dispatch]);
  const {filteredDatas,loading,error} = useSelector((state) => state.moresale);
  //button
  const [show, setShow] = useState(true);
  //slice
  const arr = filteredDatas?.slice(10,18);

  return (
    <>
      {loading && "fetching data"}
      {error && error}
      <div className="contentMoreSale">
        <div className="textMoreSale">
          <span className="textMoreSale-title">Yeni mehsullar</span>
        </div>
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
                              <p>{moreproduct.month} ay </p>
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
                             <BsFillBasketFill fill="blue" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="morefirstsecurity" > */}
              {show ? (
                <button
                  className="morefirstProduct"
                  onClick={() => setShow((show) => !show)}
                >
                  {show ? "Daha cox" : "goster"}
                </button>
              ) : (
                <MoreNewProducts />
              )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentNewProducts;
