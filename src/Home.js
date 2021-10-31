
import {provider,auth} from "./firebase"
import { selectUser ,login,logout } from './features/userSlice';
import {useSelector} from "react-redux"
import { signInWithPopup} from "firebase/auth";
import {useDispatch} from "react-redux"
// import {serverTimestamp} from "firebase/firestore"
import React,{useEffect} from 'react';
import {motion} from "framer-motion"
import MakeCard from "./MakeCard"
import CountUp from 'react-countup';
import LogoW from "./media/LogoW.svg"
import LogoD from "./media/iitgnlogo.svg"
function Home() {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     auth.signOut();
    // }, [])
    useEffect(() => {
     
        auth.onAuthStateChanged((authUser)=> {
          if(authUser){
              dispatch(
                login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                email: authUser.email,
                displayName:authUser.displayName,
              }));
          }else{
            dispatch(
              logout());
          }
        })
      }, [dispatch])
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1,transition:{type: 'tween',delay:0.2}}}
        exit={{opacity:0}}>
        {user?
        <div className="h-screen flex flex-col w-screen bg-white">
            <MakeCard />
        </div>
        :
        <div className="h-screen flex md:flex-row flex-col w-screen ">
          <div className="bg-gradient-to-br md:h-full md:w-3/4 h-3/4 from-purple-500 to-indigo-500">
            <div className="h-full w-full bg-homebg bg-no-repeat bg-contain bg-center"></div>
          </div>
          <div className="md:h-full w-full md:w-1/4 h-1/4 flex flex-col justify-between">
            <h1 className="md:text-base md:mt-4 md:px-1 text-xs text-purple-700 font-treb w-full text-center mx-auto my-auto">Login with your IIT GN email id to make a free greeting card and share it to your friends and family</h1>
            <div className="md:w-3/4 md:mx-auto w-full md:h-full h-3/4 flex md:flex-col flex-row justify-between">
              <div className="my-auto md:mx-auto md:w-1/4 md:h-1/5 h-1/4 flex w-1/3">  
                <div className="mx-auto flex flex-col"> 
                  <h1 className="md:text-base text-xs text-purple-700 font-beb w-full text-center mx-auto my-auto">
                    Total Cards
                  </h1>
                  <h1 className="md:text-3xl text-xl -mt-2 text-purple-700 font-beb w-full text-center mx-auto my-auto">
                    Generated 
                  </h1>
                  <CountUp start={-875.039}
                    end={160527.012}
                    duration={2.75} style={{fontSize:"20px",fontFamily:"Bebas",textAlign:"center",color:"#A78BFA",marginTop:"-10px"}}/>
                </div>
              </div>
            <div className="flex flex-col md:mx-auto md:h-1/3 my-auto w-1/3">
              <button onClick={()=>signInWithPopup(auth, provider)} className="bg-purple-600 my-auto py-5 px-7 font-treb rounded-3xl text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mx-auto">
              LOGIN
              </button>
            </div>
            <div className="my-auto md:mx-auto md:h-1/7 flex w-1/3">
            <div className="mx-auto flex flex-row">
              <img className="w-11 -mt-2 max-w-none" src={LogoD} alt=""/>
              <div className="flex border-r-2 border-gray-300"></div>
              <img className="w-12 max-w-none" src={LogoW} alt=""/>
            </div>
            </div>
          </div>   
          </div>  
    </div>
        }
        </motion.div>
    )
}

export default Home
