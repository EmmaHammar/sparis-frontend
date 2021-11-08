import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login({ dbParent, dbChildren,setAccountIdState,accountIdState }) {
  // React States
  const [logedInUser, setLogedInUser] = useState({
    userName: "",
    password: "",
    accountId: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isChild, setIsChild] = useState(false);
  const [isAdult, setIsAdult] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    const userChild = dbChildren.children.find(
      (user) => user.userName === logedInUser.userName
    );
    const userParent = dbParent.parents.find(
      (user) => user.userName === logedInUser.userName
    );


    // Check if the user is Child
    if (userChild) {
      if (userChild.password !== logedInUser.password) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsChild(true);
        setLogedInUser((previousState) => {
          return { ...previousState, accountId: userChild.accountId };
        });
        setAccountIdState(userChild.accountId);

        {
          console.log(userChild);
        }
      }
    } else {
     // Check if the user is Adult

      if (userParent) {
        if (userParent.password !== logedInUser.password) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsAdult(true);
          setLogedInUser((previousState) => {
            return { ...previousState, accountId: userParent.accountId };
            
          });
          setAccountIdState(userParent.accountId);
          {
            console.log(userParent.accountId);
          }
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    }
  };
  console.log('accountId',accountIdState);

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.error}>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className={styles.loginForm}>
          <div className={styles.title}>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input className={styles.inputBox }
            type="text"
            name="uname"
            onChange={(event) =>
              setLogedInUser((previousState) => {
                return { ...previousState, userName: event.target.value };
              })
            }
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input
            type="password"
            name="pass" className={styles.inputBox }
            onChange={(event) =>
              setLogedInUser((previousState) => {
                return { ...previousState, password: event.target.value };
              })
            }
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" className={styles.submitButton }/>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.app}>
    
        {isChild ? (
          <Link to="/Children">
            <button className={styles.childButton}
             
            >
             <b> Välkommen {logedInUser.userName.toUpperCase()}</b> <br/> klicka för att se din sida
            </button>
          </Link>
        ) : (
          <>
            {isAdult ? (
              <Link to="/Adults">
                <button className={styles.adultButton} >
                 <b> Välkommen {logedInUser.userName.toUpperCase()}</b><br/> klicka för att se din sida
                </button>
              </Link>
            ) : (
              renderForm
            )}
          </>
        )}
      </div>
    
  );
}
