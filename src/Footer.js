import LogoW from "./media/LogoW.svg"
// import LogoD from "./media/LogoD.svg"
import iitgn from "./media/iitgnlogo.svg"
import {motion} from "framer-motion"

function Footer() {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{type: 'tween',delay:1.8}}}
            exit={{opacity:0}}
            className="fixed z-10 w-full bottom-0 flex shadow-sm flex-row justify-between text-white bg-white">
            <div className="flex  flex-row px-2">
                <img className="w-10" alt="" src={LogoW}/>
                {/* <img className="w-28" alt="" src={LogoD}/> */}
            </div>
            
            <div className="bg-gradient-to-br h-3/4 from-purple-500 to-indigo-500 p-4 text-white rounded-xl shadow-xl drop-shadow-xl">
                Make a paper free wish
            </div>
            <div className="flex  flex-row px-2 transform scale-75">
                <img className="w-12 " alt="" src={iitgn}/>
                {/* <div className="my-auto flex flex-col ml-1 mt-0.5 mb-0.5 ">
                    <h1 className="text-sm my-auto  font-treb text-blue-400">Indian Institute </h1>
                    <h1 className="text-sm my-auto  font-treb -mt-1.5 text-blue-400">of Technology</h1>
                    <h1 className="text-sm my-auto  font-treb -mt-1.5 text-red-600">Gandhinagar</h1>
           
                </div> */}
            </div>
        </motion.div>
    )
}

export default Footer
