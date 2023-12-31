import { useEffect, useState } from "react";
import { Login, Register } from "../components/Authentication";
import { Link, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const [user, setUser] = useState({});

  const userId = useLocation();


  return (
    <div>
      <div className="lg:flex h-[1024px]">
        <section className="relative z-20 bg-green-500 w-full flex items-center justify-center lg:w-1/2 px-5 h-[400px] lg:h-full">
          <div className="lg:fixed lg:top-[40%] ">
            <h2 className="text-3xl font-bold mb-8 text-center -tracking-tighter">
              TechScribe
            </h2>
            <p className="text-lg  text-center px-2">
            Discover, Connect, and Empower.
            </p>
          </div>
        </section>
        <section className={["pt-10 relative -shadow-2xl shadow-black/90 -top-[100px] lg:top-0 bg-white border-2 border-white rounded-t-[50px] z-50 w-full lg:w-1/2 flex flex-col items-center", [userId.pathname === "/signin" ? "h-[800px]" : "h-auto"]].join(" ")}>
          <div className="mt-10 font-bold flex w-3/4 md:w-[520px] lg:w-[400px] xl:w-[520px]">
            <Link
              to="/signup"
              className={[
                "w-2/4 py-2 border-b-8",
                [userId.pathname === "/signup" ? "border-b-green-600" : null],
              ].join(" ")}
            >
              REGISTER
            </Link>
            <Link
              to="/signin"
              className={[
                "w-2/4 py-2 text-right border-b-8",
                [userId.pathname === "/signin" ? "border-b-green-600" : null],
              ].join(" ")}
            >
              LOG IN
            </Link>
          </div>
          {userId.pathname === "/signup" ? <Register /> : <Login />}
        </section>
      </div>
    </div>
  );
};
