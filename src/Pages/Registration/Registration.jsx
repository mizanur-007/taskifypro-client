import { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiCamera } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerlogo from "../../../public/registrationAnimation.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Registration = () => {
  const { signUp, updateUser, googleLogin, githubLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const name = form.name.value;
    signUp(email, password)
      .then(() => {
        updateUser(name, image).then(() => {
          toast.success("Registration Successful");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Registration successful", {
          autoClose: 2000,
        });
      })
      .catch(() => {
        toast.error("Registration Unsuccessful", {
          autoClose: 2000,
        });
      });
  };
  //github login
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Registration successful", {
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 2000,
        });
      });
  };
  return (
    <div className="flex flex-row-reverse items-center justify-between gap-52  bg-violet-50 px-5 rounded-xl pb-11 pt-8 mt-20">
      <div className="flex-1 ml-10 md:ml-48 lg:ml-16">
        <h1 className="text-3xl text-white text-center bg-gradient-to-r from-[#11bfef] via-[#3cecfc] to-[#a7e4f4] mb-7 py-9 rounded-3xl font-bold w-80">
          Registration
        </h1>
        <form onSubmit={handleRegistration}>
          <div className="form-control mb-6 w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#bee8f6]">
                <RxAvatar />
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered w-80 bg-[#bee8f6]"
              />
            </label>
          </div>
          <div className="form-control mb-6 w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#bee8f6]">
                <HiCamera />
              </span>
              <input
                type="text"
                name="image"
                required
                placeholder="Image URL"
                className="input input-bordered w-80 bg-[#bee8f6]"
              />
            </label>
          </div>
          <div className="form-control mb-6 w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#bee8f6]">
                <AiOutlineMail />
              </span>
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered w-80 bg-[#bee8f6]"
              />
            </label>
          </div>
          <div className="form-control w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#bee8f6]">
                <BsKey />
              </span>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="input input-bordered w-80 bg-[#bee8f6]"
              />
            </label>
          </div>
          <div className="form-control flex flex-row items-center mt-4 gap-3">
            <input
              type="checkbox"
              name="checkbox"
              className="checkbox"
              required
            />
            <span className="block">Accept our terms & policies</span>
          </div>
          <button
            type="submit"
            className="btn btn-block bg-gradient-to-br from-[#11bfef] to-[#8ff7d1] text-xl font-bold text-white w-80 mt-5"
          >
            Register
          </button>
          <p className="mt-3">
            Already Have An Account?{" "}
            <Link className="text-[#11bfef] font-semibold" to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </form>
        <div className="flex flex-col items-center mr-8 md:mr-48 lg:mr-0 lg:ml-20 lg:flex-row">
          <div className="grid place-items-center text-3xl">
            <button onClick={handleGoogleLogin}>
              <FcGoogle />
            </button>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid place-items-center text-3xl">
            <button onClick={handleGithubLogin}>
              <BsGithub />
            </button>
          </div>
        </div>
      </div>
      <div className="max-h-[100vh] flex-1 hidden lg:block">
        <Lottie animationData={registerlogo}></Lottie>
      </div>
    </div>
  );
};

export default Registration;
