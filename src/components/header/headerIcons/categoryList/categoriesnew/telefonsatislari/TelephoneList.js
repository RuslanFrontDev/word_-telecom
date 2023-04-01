import React from "react";
import { Link } from "react-router-dom";

const TelephoneList = () => {
  return (
    <div className="telephones-list">
      <ul>
        <li>
          <Link to="/mehsullar/Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
        </li>
      </ul>
    </div>
  );
};

export default TelephoneList;
