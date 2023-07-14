import { Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import MenuBtn from "../assets/menu.svg";
import CloseMenuBtn from "../assets/close.svg";
import { Loading } from "./Loading";
import { AuthContext } from "../context/AuthContext";
import readImg from '../assets/read.jpg'
import connectImg from '../assets/connect.jpg'
import writeImg from '../assets/write.jpg'
import TechScribeSnip from "../assets/TechScribe.jpg"


export const Home = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const {state, dispatch} = useContext(AuthContext)  

  // useEffect(() => {
  // getUser();
   
  // }, [])
  // const getUser = async () => {
  //   const docRef = doc(db, "users", "user");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setDisplayName(docSnap.data().name);
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
    
  // };

  setTimeout(()=> dispatch({type: "IS_LOADING", payload: false}), 2000)


  return (
    <>
      {state.isLoading? <Loading /> : (    <div>
      <header className="lg:px-[5%] sticky z-50 shadow-md bg-white top-0 flex px-5 md:px-12 py-3 justify-between items-center">
      <Link to='/' className="text-lg font-semibold md:text-xl xl:text-2xl text-blue-700">TechScribe</Link>
        <nav className={["bg-white flex flex-col gap-10 top-[100%] lg:shadow-none shadow-lg shadow-black/20 z-40 right-0 lg:flex-row absolute lg:relative py-8 lg:py-2 rounded-b-xl w-[250px] lg:w-3/4 justify-between items-center ", [openMenuBar? " max-lg:flex" : " max-lg:hidden"] ].join()}>
          <ul className="flex flex-col xl:ml-24 xl:gap-10 xl:text-lg lg:flex-row gap-6">
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
        <button className="lg:hidden" onClick={()=> setOpenMenuBar(prev => !prev)}>{openMenuBar? <img src={CloseMenuBtn} alt="Menu button" /> : <img src={MenuBtn} alt="Menu button" />}</button>
      </header>
      <main>
        <section className="bg-green-600 min-h-[600px] flex items-center justify-start ">
          <div className="w-[90%] md:w-4/5 mx-auto flex flex-col justify-between items-start gap-8 text-white relative">
            <h1 className="text-3xl md:w-3/4 leading-[40px] lg:w-auto md:text-4xl font-semibold">
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
        <section className="py-16 xl:w-[90%] xl:mx-auto">
          <div className="flex max-md:flex-wrap justify-between items-start px-6 md:px-12 pb-10 gap-10">
            <div className="text-center md:w-3/5">
              <h2 className="font-semibold text-2xl md:text-3xl mb-8">About <span className="text-blue-700">TechScribe</span></h2>
              <p>
              TechScribe is a vibrant online community dedicated to all things technology. Our platform serves as a collaborative space where developers, tech enthusiasts, and industry professionals come together to share their knowledge, ideas, and experiences.
              </p>
            </div>
            <div className="w-full md:w-2/5 h-[300px] border-2 border-green-700"><img src={TechScribeSnip} className="w-full object-top object-cover h-full" alt="View of techScribe" /></div>
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
                <div className="md:w-[47%] lg:w-[40%] xl:w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-xl md:text-2xl my-4">Opportunities to Contribute</h3>
                  <p className="text-gray-900 text-sm">
                  TechScribe welcomes contributions from tech enthusiasts and professionals who want to share their expertise, insights, and discoveries with our global audience. Be a part of shaping the tech discourse and making a positive impact on the community.
                  </p>
                </div>
                <div className="md:w-[47%] lg:w-[40%] xl:w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-xl md:text-2xl my-4">
                  Collaboration and Networking
                  </h3>
                  <p className="text-gray-900 text-sm">
                   TechScribe provides a platform for like-minded individuals to connect, share ideas, and collaborate on projects. Expand your professional network, find mentors, or discover potential collaborators for your next venture.
                  </p>
                </div>
                <div className="md:w-1/2 mt-2 lg:w-[40%] xl:w-[31%] border-2 border-gray-300 rounded-md p-4">
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
        <section className="bg-yellow-100 ">
          <div className="xl:w-4/5 xl:mx-auto flex flex-col md:flex-row py-14 md:pt-20 md:pb-28 items-center md:px-16  gap-4 md:gap-16">
          <div className="border-2 border-blue-500 md:h-[220px] w-[150px] h-[150px] md:w-2/4 lg:w-1/4 rounded-full"><img src="" className="h-full w-full rounded-full" alt="photo of Samuel Chima" /></div>
          <div className="w-4/5">
            <p className="text-base">
              Hi, I'm Samuel Chima, and I'm currently a Frontend Engineer. TechScribe was built as a capstone project during my last days in the AltSchool Africa's School of Engineering. I was inpired by the team's effort in developing youths in Africa. TechScribe serves as a platform that keeps me, my fellow graduants and the rest of the world in contact on new methodologies, principles, tools and ideas. Be a part of this awesome community!
            </p>
            <br />
            <br />
            <Link
              to="/signup"
              className="bg-blue-800 bl text-white border border-blue-800 px-5 lg:px-7 lg:py-3 py-3 rounded-lg"
            >
              Join TechScribe
            </Link>
          </div>
          </div>
          
        </section>
        <section className="flex flex-wrap items-center md:justify-center lg:gap-0 p-8 md:p-8 lg:p-20 md:gap-0">
          <div className="w-1/3">
            <div className="border-2 border-blue-500 h-[100px] lg:h-[120px] xl:h-[150px] w-[100px] lg:w-[120px] xl:w-[150px] rounded-full relative top-5 xl:top-10"><img src={readImg} alt="reading" className="w-full h-full object-cover rounded-full" /></div>
            <div className="border-2 border-blue-500 h-[100px] lg:h-[120px] xl:h-[150px] w-[100px] lg:w-[120px] xl:w-[150px] rounded-full relative left-[100px] md:left-[100px] xl:left-[140px] top-0"><img src={connectImg} alt="reading" className="w-full h-full object-cover rounded-full" /></div>
            <div className="border-2 border-blue-500 h-[100px] lg:h-[120px] xl:h-[150px] w-[100px] lg:w-[120px] xl:w-[150px] rounded-full relative -top-5 xl:-top-10"><img src={writeImg} alt="reading" className="w-full h-full object-cover rounded-full" /></div>
          </div>
          <div className="md:w-1/2 lg:pr-6 xl:pr-0">
            <h2 className="text-xl md:text-2xl xl:text-3xl md:leading-10 xl:leading-[50px] font-semibold">
              Write, read and connect <br /> with great minds on chatter
            </h2>
            <p className="my-5 lg:w-3/5">
              Share your great ideas, and also read write-ups based on your
              interests. connect with people of same interest and goals
            </p>
            <br />
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-5 lg:px-7 lg:py-3 py-3 rounded-lg"
            >
              Get started
            </Link>
          </div>
          <br />
          <br />
        </section>
      </main>
      <footer className="bg-yellow-100">
        <div className="lg:px-[5%] lg:mx-auto flex flex-col md:flex-row px-5 md:px-12 justify-between pt-6 md:pt-12 pb-20">
        <Link to='/' className="text-lg md:text-2xl xl:text-2xl font-semibold text-blue-700 md:relative top-5">TechScribe</Link>
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
          
        </div>
        
      </footer>
    </div>)}
    </>

  );
};
