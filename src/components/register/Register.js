import { Icon } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
    const user = await register(email, password);
  };
  return (
    <div className="forms-firebase">
      <Helmet>
        <title>Qeydiyyatdan keç</title>
        <meta name="description" content="qeydiyyatdan keç məhsul description" />
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
          <form className="register-formul" onSubmit={handleSubmit}>
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
                Qeydiyyatdan keç
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
