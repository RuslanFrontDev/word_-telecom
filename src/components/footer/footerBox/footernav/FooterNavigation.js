import React from "react";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <div className="footer-navigations">
      <div className="footer-category">
        <div className="footercategory-title">
          <h2>Telefonlar ve plansetler</h2>
        </div>
        <div>
          <ul>
            <li className="footercategory-list">
              <Link to="lala">Mobil telefonlar</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Planşetlər</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-category">
        <div className="footercategory-title">
          <h2>Qadjet və aksesuarlar</h2>
        </div>
        <div>
          <ul>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            
            <li className="footercategory-list"></li>
          </ul>
        </div>
      </div>
      <div className="footer-category">
        <div className="footercategory-title">
          <h2>TV, Audio və Əyləncə</h2>
        </div>
        <div>
          <ul>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-category">
         <div className="footercategory-title">
            <h2>Kompüter texnikası</h2>
         </div>
         <div>
          <ul>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-category">
      <div className="footercategory-title">
            <h2>Məişət texnikası</h2>
         </div>
         <div>
          <ul>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
            <li className="footercategory-list">
              <Link to="lala">Ev telefonları</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-category">
      <div className="footercategory-title">
            <h2>Nömrələr</h2>
         </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
