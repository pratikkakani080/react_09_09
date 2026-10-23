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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setUserInfo({ ...userInfo, [name]: name === "tnc" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const isValidate = () => {
    // check validation for all mandatory fields
    let formIsValid = true;
    let err = {};
    if (!userInfo.firstName || userInfo.firstName.trim() === "") {
      formIsValid = false;
      err.firstName = "Please enter first name";
    }
    if (!userInfo.lastName || userInfo.lastName.trim() === "") {
      formIsValid = false;
      err.lastName = "Please enter last name";
    }
    if (!userInfo.email || userInfo.email.trim() === "") {
      formIsValid = false;
      err.email = "Please enter email";
    }
    if (!userInfo.password || userInfo.password.trim() === "") {
      formIsValid = false;
      err.password = "Please enter password";
    }
    if (!userInfo.confirmPassword || userInfo.confirmPassword.trim() === "") {
      formIsValid = false;
      err.confirmPassword = "Please enter confirm password";
    }
    if (userInfo.password !== userInfo.confirmPassword) {
      formIsValid = false;
      err.confirmPassword = "Password and confirm password should match";
    }
    setErrors(err);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (isValidate()) {
      localStorage.setItem("user", JSON.stringify(userInfo));
      toast.success("User successfully registered!");
      setUserInfo(initialValues);
      navigate("/");
    }
  };

  return (
    <div>
      <label htmlFor="firstName">
        First Name <span style={{ color: "red" }}>*</span>{" "}
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName}</span>
        )}
      </label>
      <input
        type="text"
        name="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastName">
        Last Name <span style={{ color: "red" }}>*</span>{" "}
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName}</span>
        )}
      </label>
      <input
        type="text"
        name="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">
        Email <span style={{ color: "red" }}>*</span>{" "}
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
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
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </label>
      <input
        type="password"
        name="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="confirmPassword">
        Confirm Password <span style={{ color: "red" }}>*</span>
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword}</span>
        )}
      </label>
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
