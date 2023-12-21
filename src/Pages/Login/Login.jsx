import Lottie from "lottie-react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import loginLogo from "../../../public/loginAnimation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [check, setCheck]=useState(false);

  const {signIn, googleLogin,githubLogin} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();

  //email password login
  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(()=>{
      toast.success("Log In Successfull",{
        autoClose: 2000
      });
      navigate(location.state? location.state:"/")

    })
    .catch(()=>{
      toast.error("problem Occured",{
        autoClose: 2000
      });
    })
  }

  //google login
  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(()=>{
      toast.success("Log In Successfull",{
        autoClose: 2000
      });
      navigate(location.state? location.state:"/")
    })
    .catch(()=>{
      toast.error("problem Occured",{
        autoClose: 2000
      });
    })
  }

  //github login
  const handleGithubLogin = ()=>{
    githubLogin()
    .then(()=>{
      toast.success("Log In Successful",{
        autoClose: 2000
      });
      navigate(location.state? location.state:"/")
    })
    .catch(()=>{
      toast.error("Problem Occurred",{
        autoClose: 2000
      });
    })
  }
  return (
    <div className="flex mt-20 items-center justify-evenly  bg-[#F0F6FA] px-5 rounded-xl pb-11 pt-10">
      <div className="flex-1 ml-10 md:ml-0">
        <h1 className="text-3xl text-white text-center bg-gradient-to-r from-purple-300 to-violet-700 mb-7 py-9 rounded-3xl font-bold w-80">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-6 w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#dceaf3]">
                <AiOutlineMail />
              </span>
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered w-80 bg-[#dceaf3]"
              />
            </label>
          </div>
          <div className="form-control w-80">
            <label className="input-group">
              <span className="text-3xl bg-[#dceaf3]">
                <BsKey />
              </span>
              <input
                type={`${check? 'text':'password'}`}
                name="password"
                required
                placeholder="Password"
                className="input input-bordered w-80 bg-[#dceaf3]"
              />
            </label>
          </div>
          <div className="form-control flex flex-row items-center mt-4 gap-3">
              <input type="checkbox" name="checkbox" className="checkbox" onChange={(e)=>{setCheck(e.target.checked)}} />
              <span className="block">Show Password</span>
          </div>
          <button type="submit" className="btn btn-block bg-violet-400 text-xl font-bold text-white w-80 mt-5">
            Login
          </button>
          <p className="mt-3">
            Don&apos;t Have An Account?{" "}
            <Link className="text-pink-600 font-semibold" to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </form>
        <div className="flex flex-col items-center ml-20 lg:flex-row">
  <div className="grid place-items-center text-3xl"><button onClick={handleGoogleLogin}><FcGoogle/></button></div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid place-items-center text-3xl"><button onClick={handleGithubLogin}><BsGithub/></button></div>
</div>
      </div>

      <div className="max-h-[100vh] flex-1 hidden md:block">
        <Lottie className="h-[100vh]" animationData={loginLogo}></Lottie>
      </div>
    </div>
  );
};

export default Login;
