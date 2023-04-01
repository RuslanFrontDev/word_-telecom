import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../icons/Icon";
import { addToCart } from "../../redux/stores/features/cartSlice";
const LikeCart = () => {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.like);
  const handleAddToCart = (moreproduct) => {
    dispatch(addToCart(moreproduct));
    // navigation('/cart')
  };
  if (like.likeItems.length === 0) {
    return (
      <div className="emptylike">
        <Helmet>
        <title>Bəyəndiyiniz məhsul</title>
        <meta name="description" content="bəyəndiyiniz məhsul description" />
      </Helmet>
        <div className="emptyBasket">
          <div>
            <Icon name="sebet" />
          </div>
          <p>Bəyəndiyiniz məhsul yoxdur</p>
          <Link to="/">Ana Səhifə</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="likeCart">
        <Helmet>
        <title>Bəyəndiyiniz məhsul</title>
        <meta name="description" content="bəyəndiyiniz məhsul description" />
      </Helmet>
        <div className="container">
          <div className="likeCart-padding">
            {like.likeItems.map((likeItem) => (
              <div key={likeItem.id} className="likeCart-container">
                <div className="likeCart-Img">
                  <img src={likeItem.imageUrl} alt="" />
                </div>
                <div className="likeCartNameandLikePrice">
                  <p className="likeCartName">{likeItem.productName}</p>
                  <div className="likePrice">
                    <span>{likeItem.price}</span>
                    <Icon name="cartManat" />
                  </div>
                  <div className="likeCartbtn">
                    <button onClick={() => handleAddToCart(likeItem)}>
                      Səbətə əlavə et
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default LikeCart;
