
import {provider,auth} from "./firebase"
import { selectUser ,login,logout } from './features/userSlice';
import {useSelector} from "react-redux"
import { signInWithPopup} from "firebase/auth";
import {useDispatch} from "react-redux"
// import {serverTimestamp} from "firebase/firestore"
import React,{useEffect} from 'react';
import {motion} from "framer-motion"
import MakeCard from "./MakeCard"
function Home() {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        auth.signOut();
    }, [])
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
        <div className="h-screen flex flex-col w-screen ">
        <div className="bg-gradient-to-br h-3/4 from-purple-500 to-indigo-500">
            
        </div>
        <div className="w-full h-1/4 flex">
        <button onClick={()=>signInWithPopup(auth, provider)} className="bg-purple-600 my-auto py-2 px-4 font-treb rounded-3xl text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mx-auto">
         Sign up
        </button>
        </div>
    </div>
        }
        </motion.div>
    )
}

export default Home
