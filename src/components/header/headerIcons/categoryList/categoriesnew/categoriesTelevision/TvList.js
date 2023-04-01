import React from 'react'
import { Link } from 'react-router-dom';

const TvList = () => {
   return (
      <div className="telephones-list">
        <ul>
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
          <li>
            <Link to="/mehsullar/mobil-telefonlar?brands=Apple">Apple</Link>
          </li>
        </ul>
      </div>
    );
}

export default TvList