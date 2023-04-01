import React from "react";

const NowBuyInputContainer = () => {
  return (
    <div>
      <div className="form-baseContainer">
        <div className="form-inputbaseContainer">
          <div className="nameInputDiv">
            <div className="name">
              <label htmlFor="name">Ad</label>
            </div>
            <input name="name" className="nameInput" placeholder="Ad" />
          </div>
          <div className="surnameInputDiv">
            <div className="surname">
              <label htmlFor="surname">Soyad</label>
            </div>
            <input
              name="surname"
              className="surnameInput"
              placeholder="Soyad"
            />
          </div>
          <div className="telephoneInput">
            <div className="number">
              <label htmlFor="number">Mobil nomreniz</label>
            </div>
            <input name="number" className="numberInput" placeholder="Nömrə" />
          </div>
        </div>
        <div className="formPaymantsCards">
         <p>Ödəniş Üsulunu seçin</p>
         <div className="formCardsContainer">
            <div className="firstCartDiv">Qapıda nəğd ödəniş</div>
            <div className="secondCartDiv">Qapıda card ödəniş</div>
            <div className="threeCartDiv">Online ödəniş</div>
         </div>
        </div>
        <div className="form-baseContainerBtn">
         <button>Sifarişi tamamla</button>
      </div>
      </div>
     
    </div>
  );
};

export default NowBuyInputContainer;
