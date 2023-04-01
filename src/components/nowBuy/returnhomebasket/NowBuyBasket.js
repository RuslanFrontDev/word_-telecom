import React from "react";
import NowBuyInputContainer from "./nowbuyinputContainer/NowBuyInputContainer";
import NowBuyProducts from "./nowbuyproduct/NowBuyProducts";

const NowBuyBasket = () => {
  return (
    <div className="nowBuyBasket">
      <div className="nowBuyBasket-Input">
        <div className="nowBuyBasket-InputContainer">
         <NowBuyInputContainer/>
         <NowBuyProducts/>
        </div>
      </div>
    </div>
  );
};

export default NowBuyBasket;
