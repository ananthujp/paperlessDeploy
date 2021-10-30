import { useLocation } from 'react-router-dom'
import {useSelector} from "react-redux"
import { stateOpened } from './features/appSlice';
import {useState,useEffect} from "react"
import {db} from "./firebase"
import {doc,getDoc} from "firebase/firestore"
import Letter from "./Letter"
import {motion, AnimatePresence} from "framer-motion"
import Design3 from './Design3';
import Footer from './Footer'
import LogoW from "./media/LogoW.svg"
import LogoD from "./media/iitgnlogo.svg"
function Cards() {
    const location = useLocation();
    const opened = useSelector(stateOpened);
    const [docs,setDoc]=useState([])
    useEffect(() => {
        const docRef = doc(db, "cards", location.pathname.split("/")[2]);
        getDoc(docRef,doc).then(doc=>setDoc(doc.data()))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    //{docs.to}
    return (
        <AnimatePresence exitBeforeEnter initial={true}>
         
         <div class="pyro">
  <div class="before"></div>
  <div class="after"></div></div>   
        <motion.div className="w-screen bg-gradient-to-br from-purple-800 to-indigo-800 h-screen flex-col">
        
            {opened?<motion.div className="absolute z-20 bg-red-100"
                initial={{height:0,width:"33%",top:"50%",left:"33%"}}
                animate={{height:"100%",width:"100%",top:"0%",left:"0",transition:{duration:0.5,delay:1.2}}}
                >
                <Footer/>
               <Design3 message={docs.message} img={docs.src} from={docs.from}/> 
            </motion.div>:
            <></>}
            <div className="w-1/2 lg:1/5 md:h-1/4 h-1/4 flex mx-auto my-auto">
            <h1 className="text-white md:text-4xl text-2xl font-treb mx-auto my-auto text-center">
                    Hi {docs.to}, you have a letter from {docs.from}
            </h1>
            </div>
            <div className="md:w-1/3 w-1/2 md:h-1/2 h-2/4 mx-auto my-auto">
                
            {opened?<motion.div
                    className=""
                    initial={{scale:(1.1,1.1),y:0}}
                    animate={{scale:(0.1,0.1),y:0,transition:{duration:0.5,delay:1.0,type: 'spring', damping: 150 }}}
                    exit={{scale:(1,1),y:-400,transition:{duration:0.5,delay:1.5, when: "beforeChildren"}}}>
                        <Letter/>
                </motion.div>:<motion.div
                    className=""
                    initial={{scale:(11,11),y:400}}
                    animate={{scale:(1.1,1.1),y:0,transition:{duration:0.5,delay:0.5}}}
                    exit={{scale:(1,1),y:-400,transition:{duration:0.5,delay:1.5, when: "beforeChildren"}}}>
                        <Letter/>
                        <h1 className="text-white text-center mt-4 animate-pulse">Click on the letter to open</h1>
                </motion.div>}
                
            </div>
            <motion.div initial={{scale:(0.1,0.1),y:0}}
                    animate={{scale:(1,1),y:0,transition:{duration:0.2,delay:1.0,type: 'spring', damping: 150 }}}
                    exit={{scale:(1,1),y:-400,transition:{duration:0.5,delay:1.5, when: "beforeChildren"}}}
                    className="h-1/7 mx-auto  flex">
                <div className="mx-auto  flex flex-row bg-white rounded-xl p-2">
                    <img className="w-11 -mt-2 mx-2 max-w-none" src={LogoD} alt=""/>
                    <div className="flex border-r-2 border-gray-300"></div>
                    <img className="w-12 max-w-none mx-2" src={LogoW} alt=""/>
                </div>
            </motion.div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Cards
