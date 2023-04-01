import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../icons/Icon";
import { moreproductsFetch } from "../../redux/stores/features/moresale";

const Apple = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moreproductsFetch());
  }, [dispatch]);
  //datalar
  const { filteredDatas, loading, error } = useSelector(
    (state) => state.moresale
  );
  const arr = filteredDatas?.slice(20, 29);
  return (
    <div className="appleproduct-grid">
      <Helmet>
        <title>Apple məhsulları</title>
        <meta name="description" content="apple məhsulları description" />
      </Helmet>
      {arr?.map((moreproduct) => (
        <div key={moreproduct.id} className="apple-gridData">
          <div className="appleProduct">
            <div className="apple-cartProduct">
              <div className="apple-cartProductPadding">
                <div className="appleinner-image">
                  <div className="appleinnerImage-container">
                    <div className="appleinner-imageOwn">
                      <img src={moreproduct.imageUrl} alt="" />
                    </div>
                  </div>
                </div>
                <div className="appleProduct-name">
                  <div>
                    <p>{moreproduct.brands}</p>
                  </div>
                  <h3>{moreproduct.productName}</h3>
                </div>
                <div className="manat-month">
                  <div className="cartAmount">
                    <div className="manat">
                      <div>
                        <p>Qiymeti: {moreproduct.price}</p>
                        <div className="apple-icon">
                          <Icon name="cartManat" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apple;
