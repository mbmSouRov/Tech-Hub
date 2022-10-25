import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { userLogIn, userLogInWithGoogle } = useContext(AuthContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("All Informations:", email, password);
    userLogIn(email, password)
      .then((result) => {
        console.log("user is: ", result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Something Wrong With Login", error.message);
      });
  };

  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    userLogInWithGoogle()
      .then((userInfo) => {
        console.log(userInfo.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Hey! <br />
              Login now!
            </h1>
            <p className="py-6">
              Millions of people turn their ideas into reality, knowledge into
              money! Join this journey, Login now!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleOnSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt link link-hover text-start">
                    Forgot password? Reset here.
                  </p>
                </label>
                <label className="text-start p-1">
                  <p className="text-slate-900 font-light">
                    Don't have an account?
                    <span className="text-red-900 font-normal link-hover">
                      <Link to={"/signup"}>Click Here</Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mb-4">
              <button
                onClick={handleGoogleLogIn}
                className="btn btn-outline btn-success"
              >
                <FaGoogle />
                <p className="mx-2">Continue With Google</p>
              </button>
              <button className="btn btn-outline mt-1">
                <FaGithub />
                <p className="mx-2">Continue With Github</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
