import React, { useContext, useState } from "react";
import { AuthContext } from "../Authv1/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, state } = useContext(AuthContext);

const navigate = useNavigate()

  console.log(state);
  console.log(state.user)

  const submitHandler = async (e) => {
    e.preventDefault();
    // axios.post("/questions", {email, password}).then(()=>{
    //   navigate("/home")
    // })
    await login(email, password);
    
  };

  return (
    <div className="col card shadow p-5 text-center mt-5">
      <div>
        <h3 className="m-3">Login into your account</h3>
        <p className="mb-5">
          Don't have an account?{" "}
          <a
            href=""
            className="fw-semibold text-decoration-none text-warning"
          >
            Create a new account
          </a>
        </p>
      </div>
      <form onSubmit={submitHandler} action="">
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            className="form-control p-3"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="my-3">
          <p className="d-flex justify-content-end">
            <a
              className="fw-semibold text-decoration-none text-warning"
              href="#"
            >
              Forgot password?
            </a>
          </p>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary action-btn fs-5 fw-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
