import React, { useState } from "react";
import { login } from "../../firebase";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as loginHandle } from "../../redux/stores/features/auth";
import { Icon } from "@mui/material";
import { Helmet } from "react-helmet";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    dispatch(loginHandle(user));
    navigate("/logout");
  };
  return (
    <div className="forms-firebase">
      <Helmet>
        <title>Giriş et</title>
        <meta name="description" content="giriş et description" />
      </Helmet>
      <div className="container">
        <div className="returnHome">
          <Link to="/">Ana səhifə</Link>
          <div className="homedat">
            <Icon name="cartDat" />
          </div>
          <h5>Səbətim</h5>
        </div>
        <div className="form-center">
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="email-label">
                Email
              </label>
              <div className="email-input">
                <input
                  id="email"
                  type="text"
                  placeholder="E-post adresi"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="password-label">
                Password
              </label>
              <div className="email-input">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="register-firebase-btn">
              <button disabled={!email || !password} type="submit">
                Giris et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
