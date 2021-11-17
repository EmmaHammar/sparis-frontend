import React, { useState } from "react";
import { useFetch } from '../../hooks/useFetch'
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../../server/server"

export default function Login() {
  // React States

  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);

  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [repositories] = useState([
    'EmmaHammar/sparis-frontend/contributors',
    'noaignite/front-end-questions',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express'
])

    const [repo, setRepo] = useState(repositories[0])
    

   let URL = `https://api.github.com/repos/${repo}`

    const { data, loading, error } = useFetch(URL)

  const errors = {
    uname: "Ogiltigt",
    pass: "Ogiltigt lösenord",
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

      {/* <p>{data?.login}</p> */}
      {console.log(data)}

    {/* <div style = {{textAlign: 'center', padding: '7px', fontSize: '20px'}}>
    
    <h3> Vi som står bakom sparis</h3>
    <br/>
    {data? data.map((child, index) =>

               <p key={index}>{child.login}</p>   
    
      ) : ""
    } 

    </div> */}
  

      <div className={styles.loginForm}>
        <div className={styles.title}>Logga in</div>

        {/* Username input */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>Användarnamn </label>
            <input className={styles.inputBox}
              type="text"
              name="userName"
              onChange={({ target }) => setInputUserName(target.value)}
            />
          </div>

          {/* Password input */}
          <div className={styles.inputContainer}>
            <label>Lösenord </label>
            <input
              type="password"
              name="pass" className={styles.inputBox}
              onChange={({ target }) => setInputPassword(target.value)}
            />
          </div>

          {/* Submit button */}
          {errorMsg ? <span>{errorMsg}</span> : ""}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}> Skicka </button>
          </div>
        </form>
      </div>
    </div>

  );
}