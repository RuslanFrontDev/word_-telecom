import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, emailVerification } from "../../firebase";
import { logout as logoutHandle } from "../../redux/stores/features/auth";
import UpdateProfile from "../update/UpdateProfile";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };
  const handleVerification = async () => {
    await emailVerification();
  };
  if (user) {
    return (
      <div className="logout">
        <Helmet>
        <title>Çıxış et</title>
        <meta name="description" content="çıxış et description" />
      </Helmet>
        <div className="container">
          <h1 className="logout-title">
            siz artiq qeydiyyatdan kecdiniz
            <button onClick={handleLogout} className="logout-btn">
              Cixis et
            </button>
            {!user.emailVerified && (
              <button onClick={handleVerification} className="emailverified">
                E-post onayla
              </button>
            )}
          </h1>
          <UpdateProfile />
        </div>
      </div>
    );
  }
};

export default Logout;
