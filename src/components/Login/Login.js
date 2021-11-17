import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../../server/server"

export default function Login() {
  // React States

  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);

  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const errors = {
    uname: "invalid",
    pass: "invalid password",
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let dbData = await logInUser(inputUserName, inputPassword)

    //If data
    if (dbData) {

      if (dbData.type === "parent") {

        navigate('/adults', {state: dbData})

      }

      if (dbData.type === "child") {

        navigate('/children', {state: dbData})
      }

    } else {
      setErrorMsg(errors.uname)
    }

  }


  return (
    <div className={styles.app}>

      <div className={styles.loginForm}>
        <div className={styles.title}>Sign In</div>

        {/* Username input */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>Username </label>
            <input className={styles.inputBox}
              type="text"
              name="userName"
              onChange={({ target }) => setInputUserName(target.value)}
            />
          </div>

          {/* Password input */}
          <div className={styles.inputContainer}>
            <label>Password </label>
            <input
              type="password"
              name="pass" className={styles.inputBox}
              onChange={({ target }) => setInputPassword(target.value)}
            />
          </div>

          {/* Submit button */}
          {errorMsg ? <span>{errorMsg}</span> : ""}
          <div className={styles.buttonContainer}>
            <input type="submit" className={styles.submitButton} />
          </div>
        </form>
      </div>
    </div>

  );
}