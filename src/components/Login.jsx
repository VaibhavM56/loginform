import React, { useState } from "react";
import "./Login.css";

function Login() {
  let [login1, setLogin] = useState({
    userName: "",
    password: "",
  });

  let [printData, setPrintData] = useState({
    printUsername: "",
    printPassword: "",
  });

  const loginFunc = (e) => {
    console.log(e);
    e.preventDefault();
    const loginCopy = { ...login1 };
    loginCopy[e.target.name] = e.target.value;
    setLogin(loginCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrintData({
      ...printData,
      printUsername: login1.userName,
      printPassword: login1.password,
    });
    console.log(login1);

    localStorage.setItem("userName", login1.userName);
    localStorage.setItem("password", login1.password);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="" className="lb1">
          Username:{" "}
        </label>
        <input
          type="text"
          className="inp1"
          onChange={loginFunc}
          name="userName"
          value={login1.userName}
        />
        <label htmlFor="" className="lb2">
          Password:
        </label>
        <input
          type="text"
          className="inp2"
          onChange={loginFunc}
          name="password"
          value={login1.password}
        />
        <button className="btn1" type="submit">
          Login
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Log out
        </button>
      </form>
      <p>{localStorage.getItem("userName")}</p>
      <p>{localStorage.getItem("password")}</p>
    </div>
  );
}

export default Login;
