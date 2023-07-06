import { Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

export const Home = () => {
  const [displayName, setDisplayName] = useState("");  

  useEffect(() => {
  getUser();
   
  }, [])
  const getUser = async () => {
    const docRef = doc(db, "users", "user");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDisplayName(docSnap.data().name);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
  };

  


  return (
    <div>
      <header className="sticky z-50 shadow-md bg-white top-0 flex px-5 md:px-12 py-2 justify-between items-center">
        <h2 className="text-lg md:text-3xl font-semibold text-blue-700">TechScribe</h2>
        <nav className="bg-white flex flex-col gap-10 top-[100%] shadow-lg shadow-black/20 z-40 right-0 md:top-0 md:flex-row absolute md:relative py-8 rounded-b-xl w-[250px] md:w-3/4 justify-between items-center">
          <ul className="flex flex-col md:flex-row gap-6">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <div className="flex gap-4">
            <Link
              to="/signin"
              className="border border-blue-500 px-7 py-2 rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-blue-700 text-white border border-blue-700 px-7 py-2 rounded-lg"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section className="bg-green-600 min-h-[600px] flex items-center justify-start ">
          <div className="w-[90%] md:w-4/5 lg:w-full  mx-auto flex flex-col justify-between items-start gap-8 text-white relative lg:left-40">
            <h1 className="text-3xl md:w-3/5 leading-[40px] lg:w-auto md:text-4xl font-semibold">
            Welcome to TechScribe: Your Gateway to Tech Exploration!
            </h1>
            <p className="text-lg w-[90%] md:w-3/5">
              Unleash the power of Words, Connect with Like-minded Readers and Writers
            </p>
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-7 py-3 rounded-lg"
            >
              Get started
            </Link>
          </div>
        </section>
        <section className="py-16">
          <div className="flex max-md:flex-wrap  justify-between items-start px-6 md:px-12 pb-10 gap-10">
            <div className="text-center md:w-3/5">
              <h2 className="font-semibold text-2xl md:text-3xl mb-8">About <span className="text-blue-700">TechScribe</span></h2>
              <p>
              TechScribe is a vibrant online community dedicated to all things technology. Our platform serves as a collaborative space where developers, tech enthusiasts, and industry professionals come together to share their knowledge, ideas, and experiences.
              </p>
            </div>
            <div className="w-full md:w-2/5 h-[300px] border-2 border-green-700"></div>
          </div>
          <div className="py-10">
            <div className="w-4/5 mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
                Why <span className="text-blue-700">TechScribe</span>
              </h2>
              <p className="mb-12">
              At TechScribe, we believe that technology is more than just lines of code—it's a catalyst for innovation, problem-solving, and transformative change. We strive to cultivate an environment where individuals passionate about technology can connect, learn, and inspire one another.
              </p>
              <div className="flex justify-around flex-wrap gap-8 text-center">
                <div className="md:w-[47%] lg:w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-xl md:text-2xl my-4">Opportunities to Contribute</h3>
                  <p className="text-gray-900 text-sm">
                  TechScribe welcomes contributions from tech enthusiasts and professionals who want to share their expertise, insights, and discoveries with our global audience. Be a part of shaping the tech discourse and making a positive impact on the community.
                  </p>
                </div>
                <div className="md:w-[47%] lg:w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-xl md:text-2xl my-4">
                  Collaboration and Networking
                  </h3>
                  <p className="text-gray-900 text-sm">
                   TechScribe provides a platform for like-minded individuals to connect, share ideas, and collaborate on projects. Expand your professional network, find mentors, or discover potential collaborators for your next venture.
                  </p>
                </div>
                <div className="md:w-1/2 mt-2 lg:w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-xl md:text-2xl my-4">
                  Engaging Content
                  </h3>
                  <p className="text-gray-900 text-sm">
                  TechScribe hosts a wide range of captivating articles, tutorials, and thought-provoking discussions covering diverse topics within the tech industry. From software development and data science to artificial intelligence and cybersecurity, our content aims to inform, educate, and spark conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row py-14 md:pt-20 md:pb-28 items-center md:px-16  gap-4 md:gap-16 bg-yellow-100 ">
          <div className="border-2 border-blue-500 md:h-[220px] h-[80px] w-1/5 md:w-2/4 lg:w-1/4 rounded-full"></div>
          <div className="w-4/5">
            <p className="text-sm lg:text-base">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, aut suscipit? Laboriosam ipsa odit ullam esse modi
              sequi dolore totam dolorem culpa ad explicabo, aliquam voluptate
              perspiciatis ipsam facere quisquam."
            </p>
            <h3 className="mt-5 mb-8 text-sm md:text-xl font-semibold">
              John Doe,{" "}
              <span className="w-3/5 text-xs md:text-base text-gray-700">
                software developer @AltSchool_Africa
              </span>
            </h3>
            <Link
              to="/signup"
              className="bg-blue-800 text-sm text-white border border-blue-800 px-4 md:px-7 py-2 md:py-3 rounded-lg"
            >
              Join TechScribe
            </Link>
          </div>
        </section>
        <section className="flex flex-wrap p-8 md:p-20 md:gap-16">
          <div className="w-1/3">
            <div className="border-2 border-blue-500 h-[80px] md:h-[130px] w-[80px] md:w-[130px] rounded-full"></div>
            <div className="border-2 border-blue-500 h-[80px] md:h-[130px] w-[80px] md:w-[130px] rounded-full relative left-[100px] md:left-[170px] -top-6"></div>
            <div className="border-2 border-blue-500 h-[80px] md:h-[130px] w-[80px] md:w-[130px] rounded-full relative -top-12"></div>
          </div>
          <div className="md:w-1/2 pr-6">
            <h2 className="text-2xl md:text-3xl md:leading-[50px] font-semibold">
              Write, read and connect <br /> with great minds on chatter
            </h2>
            <p className="my-5">
              Share your great ideas, and also read write-ups based on your
              interests. connect with people of same interest and goals
            </p>
            <br />
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-4 md:px-7 py-2 md:py-3 rounded-lg"
            >
              Get started
            </Link>
          </div>
          <br />
          <br />
        </section>
      </main>
      <footer className="flex flex-col md:flex-row px-5 md:px-16 justify-between bg-yellow-100 pt-6 md:pt-12 pb-20">
        <h2 className="text-lg md:text-3xl font-semibold text-blue-700 md:relative top-5">TechScribe</h2>
        <div className="md:w-3/4 -ml-6 md:ml-0 mt-5 md:mt-0">
          <ul className="flex justify-around">
            <li className="flex flex-col gap-5 md:text-lg font-semibold">
              Explore
              <ul className="flex flex-col gap-2 text-xs md:text-sm font-normal">
                <li>Community</li>
                <li>Trending blogs</li>
                <li>Chattter for teams</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 md:text-lg font-semibold">
              Support
              <ul className="flex flex-col gap-2 text-xs md:text-sm font-normal">
                <li>Support docs</li>
                <li>Join slack</li>
                <li>Contact</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 md:text-lg font-semibold">
              Official blog
              <ul className="flex flex-col gap-2 text-xs md:text-sm font-normal">
                <li>Official blog</li>
                <li>Engineering bog</li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
