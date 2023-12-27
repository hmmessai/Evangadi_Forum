import React, { useContext, useState } from 'react'
import {AuthContext} from '../Authv1/AuthContext'
import FooterComp from "../../components/Footer/FooterComp";
const SignUp = ({ setCurrentPage }) => {

const[user, setUser]= useState({
  firstname:'',
  lastname:'',
  email:'',
  password:''

})
console.log(user)

 const { signup } = useContext(AuthContext);


 const submitHandler= (e)=> {
  e.preventDefault()
signup(user.firstname,user.lastname,user.email,user.password)
}

  return (
    <div className="col card shadow p-5 text-center mt-5">
      <div>
        <h3 className="m-3">Join the network</h3>
        <p className="mb-5">
          Already have an account?{" "}
          <a
            href="#"
            onClick={() => setCurrentPage("login")}
            className="fw-semibold text-decoration-none text-warning">
            Sign in
          </a>
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Email Address"
            onChange={(e) =>
              setUser((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
          <div className="d-flex gap-4">
            <input
              type="text"
              className="form-control p-3"
              placeholder="First Name"
              onChange={(e) =>
                setUser((prev) => {
                  return {
                    ...prev,
                    firstname: e.target.value,
                  };
                })
              }
            />

            <input
              type="text"
              className="form-control p-3"
              placeholder="Last Name"
              onChange={(e) =>
                setUser((prev) => {
                  return {
                    ...prev,
                    lastname: e.target.value,
                  };
                })
              }
            />
          </div>
          <input
            type="password"
            className="form-control p-3"
            placeholder="Password"
            onChange={(e) =>
              setUser((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
          />
        </div>
        <div className="p-3">
          <small>I agree to the privacy policy and terms of service</small>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary action-btn fs-5 fw-semibold">
            Agree and Join
          </button>

          <div className="my-3">
            <p className="d-flex justify-content-center">
              <a
                className="fw-semibold text-decoration-none text-warning"
                href="#"
                onClick={() => setCurrentPage("login")}>
                Already have an account?
              </a>
            </p>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default SignUp
