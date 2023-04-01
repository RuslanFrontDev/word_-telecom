import React from "react";
//icons
import { Link } from "react-router-dom";
import { Icon } from "../../../icons/Icon";
const ProfileIcon = () => {
  return (
    <div className="profile-icon">
      <Link className="logingo-link" to="/login">
        <Icon name="login" />
      </Link>
      <div className="login-include">
         <div className="login-direction">
            <div className="direction-rotate"></div>
         </div>
        <div className="login-profile">
          <p className="offers">Daha yaxşı təkliflər üçün hesabınıza giriş edin.</p>
          <div className="login-profile-include">
            <Link className="login-green" to="/login">Giriş</Link>
            <Link className="login-white" to="/register">Qeydiyyat</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
