import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  tnc: false,
};

function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setUserInfo({ ...userInfo, [name]: name === "tnc" ? checked : value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    toast.success("User successfully registered!");
    setUserInfo(initialValues);
    navigate("/");
  };

  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={userInfo.confirmPassword}
        onChange={handleChange}
      />
      <br />
      <p>
        <input
          type="checkbox"
          name="tnc"
          checked={userInfo.tnc}
          onChange={handleChange}
        />
        I hereby accept tnc and privacy policy
      </p>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
