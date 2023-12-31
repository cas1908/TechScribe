import React, { useContext } from "react";
import {
  useGooglePopUp,
  useGitHubPopUp,
  useEmailAndPassword,
} from "../../hooks";
import { AuthContext } from "../../context/AuthContext";
import GoogleIcon from "../../assets/google-icon.svg"
import GithubIcon from "../../assets/github.svg"



// SignUp component
const Signup = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { popUp } = useGooglePopUp();
  const { githubPopUp } = useGitHubPopUp();
  const { emailAndPassword } = useEmailAndPassword();

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailAndPassword(
      state.user.email,
      state.user.password,
      `${[state.user.displayName.first, state.user.displayName.last].join(" ")}`
    );

  };

  return (
    <>
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center">
         Sign Up for an account
        </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <section className="flex flex-wrap gap-6 md:gap-0 justify-between w-[300px] md:w-[520px] lg:w-[400px] xl:w-[520px]">
            <div className="w-full md:w-[49%]">
              <label htmlFor="first-name" className="text-lg ">
                First name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_FNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="firstname"
                id="first-name"
                placeholder="John"
                autoComplete="on"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <label htmlFor="last-name" className="text-lg ">
                Last name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_LNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="lastname"
                id="last-name"
                placeholder="Doe"
                autoComplete="on"
              />
            </div>
          </section>
          <br />
          {/* <section>
            <label htmlFor="user-mode" className="text-lg ">
              You are joining as?
            </label>
            <br />
            <select
              className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
              name="user-moode"
              id="user-mode"
            >
              <option className="border-white border" value="Writer">
                Writer
              </option>
              <option value="Reader">Reader</option>
            </select> 
          </section> 
          <br /> */}
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[300px] md:w-[520px] lg:w-[400px] xl:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            autoComplete="on"
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[300px] md:w-[520px] lg:w-[400px] xl:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="password"
            placeholder="********"
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="confirm-password" className="text-lg ">
            Confirm Password
          </label>
          <br />

          <input
            className="w-[300px] md:w-[520px] lg:w-[400px] xl:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="confirm-password"
            placeholder="********"
          />
          <br />
          <br />
          <button className="w-[300px] md:w-[520px] lg:w-[400px] xl:w-[520px] text-center bg-green-600 text-white font-bold py-[10px] px-[14px] rounded-md">
            Create account
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

export default Signup;
