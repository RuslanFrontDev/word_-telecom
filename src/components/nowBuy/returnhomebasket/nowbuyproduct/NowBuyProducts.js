import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "../../../../icons/Icon";

const NowBuyProducts = () => {
  const nowbuy = useSelector((state)=>state.nowbuy)
  return (
    <>
    {nowbuy.nowbuyItems.map(product=>(
      <div key={product.id} className="amountPaidDiv">
        <div className="amountPaid">
          <p>Ğdəniləcək məbləğ:</p>
          <p>
            {product.price}
            <Icon name="cartManat" />
          </p>
        </div>
        <div className="orderProduct">
          <div className="orderOptionsProduct">
            <div className="orderProduct-number">
              {/* <div className="firstCashDiv">
                <div className="cashTotalText">Nəğd alışda endirim</div>
                <div className="cashTotalPrice">
                  <span>{product.price}</span>
                  <Icon name="cartManat" />
                </div>
              </div> */}

              <div className="secondCashDiv">
                <div className="cashTotalText">Toplam qiymet:</div>
                <div className="cashTotalPrice">
                  <span>{product.price}</span>
                  <Icon name="cartManat" />
                </div>
              </div>
            </div>
            <div className="orderProductOwn">
              <div className="order-titleandimage">
                <div>
                  <img
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <p>{product.productName}</p>
              </div>
              <div className="order-producttotalPrice">
                Qiymet:
                <span>
                  {product.price} <Icon name="cartManat" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
      
    </>
  );
};

export default NowBuyProducts;
