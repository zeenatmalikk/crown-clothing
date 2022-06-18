import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InputField from "../form-input/FormInput";
import { auth, createUserProfileDocument } from "../Firebase/Firebase.utils";
import "./Signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [displayName, setdisplayName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setdisplayName("");
      setpassword("");
      setconfirmPassword("");
      setemail("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="displayName"
            value={displayName}
            onChange={(e) => setdisplayName(e.target.value)}
            label="Display Name"
            required
          />
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Email"
            required
          />
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            label="Password"
            required
          />
          <InputField
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Signup;
