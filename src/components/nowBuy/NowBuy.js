import React from "react";
import { Helmet } from "react-helmet";
import NowBuyBasket from "./returnhomebasket/NowBuyBasket";
import NowBuyReturnHome from "./returnhomebasket/NowBuyReturnHome";

const NowBuy = () => {
  return (
    <div className="cartContent">
      <Helmet>
        <title>Alınacaq məhsul</title>
        <meta name="description" content="alınacaq məhsul description" />
      </Helmet>
      <div className="container">
        <div className="nowBuy">
          <NowBuyReturnHome />
          <NowBuyBasket />
        </div>
      </div>
    </div>
  );
};

export default NowBuy;
