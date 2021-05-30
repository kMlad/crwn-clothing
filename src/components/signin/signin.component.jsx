import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          value={email}
          required
          handleChange={handleEmailChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="pass"
          id="password"
          value={password}
          required
          handleChange={handlePasswordChange}
          label="Password"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomButton type="submit">Sign In</CustomButton>
          <button className="google-button" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
