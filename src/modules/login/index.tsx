import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let isValid = true;
    let err = {};

    if (!userInfo.email && userInfo.email.trim() === "") {
      isValid = false;
      err.email = "please enter the email";
    }
    if (!userInfo.password && userInfo.password.trim() === "") {
      isValid = false;
      err.password = "please enter the password";
    }

    setErrors(err);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
      const userExists = storedUsers.find(
        (el) =>
          el.email === userInfo.email && el.password === userInfo.password,
      );
      if (!userExists) {
        toast.error("user does not exists");
        return;
      }
      localStorage.setItem('loggedInUser', userInfo.email)
      navigate("/");
    }
  };

  return (
    <div>
      <label htmlFor="email">
        Email <span style={{ color: "red" }}>*</span>{" "}
        <span style={{ color: "red" }}>{errors.email}</span>
      </label>
      <input
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">
        Password <span style={{ color: "red" }}>*</span>
        <span style={{ color: "red" }}>{errors.password}</span>
      </label>
      <input
        type="password"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
