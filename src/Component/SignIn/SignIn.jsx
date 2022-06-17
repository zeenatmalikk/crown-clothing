import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../Firebase/Firebase.utils";
import InputField from "../form-input/FormInput";
import "./SignIn.scss";
const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Signin with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setemail(e.target.value)}
          label={"email"}
          required
        />
        <InputField
          type="password"
          name="password"
          value={password}
          handleChange={(e) => setpassword(e.target.value)}
          required
          label={"password"}
        />
       <div className="buttons">
       <CustomButton type="submit">Submit</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with google
        </CustomButton>
       </div>
      </form>
    </div>
  );
};

export default SignIn;
