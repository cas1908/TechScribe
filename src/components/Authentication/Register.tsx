const Signup = () => {
  return (
    <>
      <div className="mt-10 font-bold w-[520px] flex">
        <h2 className="w-2/4 py-2 border-b-8 border-b-blue-600">REGISTER</h2>
        <h2 className="w-2/4 py-2 text-right border-b-8 ">
          LOG IN
        </h2>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-center">Register as a Writer/Reader</h2>
        <br />
        <form>
            <section className="flex justify-between w-[520px]">
                <div className="w-[49%]">
                    <label htmlFor="first-name" className="text-lg ">First name</label>
                    <br />
                    <input className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md " type="text" name="firstname" id="first-name" placeholder="John"/>
                </div>
                <div className="w-[49%]">
                    <label htmlFor="last-name" className="text-lg ">Last name</label>
                    <br />
                    <input className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md " type="text" name="lastname" id="last-name" placeholder="Doe"/>
                </div>
                
            </section>
            <br />
            <section>
                <label htmlFor="user-mode" className="text-lg ">You are joining as?</label>
                <br />
                <select  className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md " name="user-moode" id="user-mode">
                    <option className="border-white border" value="Writer">Writer</option>
                    <option value="Reader">Reader</option>
                </select>
            </section>
            <br />
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="password"
            placeholder="********"
          />
          <br />
          <br />
          <label htmlFor="confirm-password" className="text-lg ">
            Confirm Password
          </label>
          <br />

          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="confirm-password"
            placeholder="********"
          />
          <br />
          <br />
          <button className="w-[520px] text-center bg-blue-700 text-white font-bold py-[10px] px-[14px] rounded-md">
            Create account
          </button>
        </form>
        <section className="my-6">
        <button className="w-[520px] text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md">
            Sign up with google
          </button>
          <br />
          <br />
          <button className="w-[520px] text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md">
          Sign up with LindkedIn
          </button>
        </section>
      </div>
    </>
  );
};

export default Signup;
