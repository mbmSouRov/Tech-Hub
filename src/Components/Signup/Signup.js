import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Signup = () => {
  const navigate = useNavigate();
  const { userSignUp, updateUserProfile } = useContext(AuthContext);
  const toastSignUp = () => toast.success("New User Created!");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullname.value;
    const profilePic = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("All Informations:", name, profilePic, email, password);
    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate("/home");
        form.reset();
        handleUpdateProfile(name, profilePic);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdateProfile = (name, profilePic) => {
    const profile = {
      displayName: name,
      photoURL: profilePic,
    };
    updateUserProfile(profile)
      .then((result) => {
        console.log("Registration Completed");
        toastSignUp();
      })
      .catch((error) => {
        console.log("Somthing Wrong With Registration", error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:flex-row-reverse flex-col-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="URL"
                  name="photourl"
                  placeholder="URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="text-start p-1">
                  <p className="text-slate-900 font-light">
                    Already have an account?
                    <span className="text-red-900 font-normal px-1">
                      <Link to={"/login"}>Click Here</Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
              <Toaster />
            </form>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              New Here?
              <br />
              Sign Up!
            </h1>
            <p className="py-6">
              Sign Up And Discover a great amount of new opportunities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
