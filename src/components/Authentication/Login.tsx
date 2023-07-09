import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useGitHubPopUp, useGooglePopUp, useSignInWithEmail } from "../../hooks";
import GoogleIcon from "../../assets/google-icon.svg"
import GithubIcon from "../../assets/github.svg"


const Login = () => {
  const { state, dispatch} = useContext(AuthContext)
  const { popUp } = useGooglePopUp();
  const { githubPopUp } = useGitHubPopUp();
  const { signInWithEmail } = useSignInWithEmail()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmail(state.user.email, state.user.password)

      }
  return (
    <>
      <div className="absolute top-[25%] lg:top-[20%]">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[300px] md:w-[520px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[300px] md:w-[520px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
          <br />
          <br />
          <button className="w-[300px] md:w-[520px] text-center bg-green-600 text-white font-bold py-[10px] px-[14px] rounded-md">
            Log in
          </button>
        </form>
        <div className="flex justify-between items-center my-6">
          <hr className=" w-2/5" />
          <span>or</span>
          <hr className=" w-2/5" />
        </div>
        <section className="flex justify-evenly">
        <button
            onClick={popUp}
            className=" text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            <img src={GoogleIcon} alt="Google icon" />
          </button>
          <button
            onClick={githubPopUp}
            className=" text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            <img src={GithubIcon} alt="GitHub icon" />
          </button>
        </section>
      </div>
    </>
  );
};


export default Login;
