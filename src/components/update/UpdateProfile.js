import React, { useState } from "react";
import { update, auth, resetPassword } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/stores/features/auth";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [password, setPassword] = useState("");
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     await update({
  //       displayName,
  //     });
  //     console.log(auth.currentUser);
  //     dispatch(login(auth.currentUser));
  //   };
  return (
    <div className="update-profile">
        <form onSubmit={handleResetSubmit} className="update">
          <h1> Parolu guncelle</h1>
          <div>
            <label htmlFor="password" className="password-labelchange">
              Parolunuz
            </label>
            <div className="passwordchange-input">
              <input
                id="password"
                type="password"
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="register-firebase-btn">
            <button disabled={!password} type="submit">
              parolu guncelle
            </button>
          </div>
          {/*         
        <div>
          <label htmlFor="name" className="email-label">
            ad-Soyad
          </label>
          <div className="name-input">
            <input
              id="name"
              type="text"
              placeholder="John doe"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div> */}
          {/* <div className="register-firebase-btn">
          <button type="submit">Guncelle</button>
        </div> */}
        </form>
      </div>
  );
};

export default UpdateProfile;
