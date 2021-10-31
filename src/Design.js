import LogoW from "./media/LogoW.svg"
import LogoD from "./media/iitgnlogo.svg"
import colorsClass from "./Colors"
import {motion} from "framer-motion"
function Design({message,from,img,clr,des}) {
    return (
        <motion.div
            initial={{opacity:"0",scale:(0.01,0.01),height:"0%" ,width:"0%"}}
            animate={{opacity:"1",scale:(1,1),height:"100%", width:"100%",transition:{delay:1.4}}}
            className="h-screen flex md:flex-row flex-col w-screen ">
          <div className={"md:h-full md:w-3/4 h-3/4 bg-gradient-to-br from-"+colorsClass[clr][1]+" to-"+colorsClass[clr][2]}>
            <div className={"h-full w-full bg-des"+des+" bg-no-repeat bg-contain bg-center"}></div>
          </div>
          <div className="md:h-full w-full md:w-1/4 h-1/4 bg-white flex flex-col justify-between">
            <h1 className={"md:text-base font-gloria overflow-auto mt-2 md:mt-4 md:px-1 text-4xl text-"+ colorsClass[clr][0] + " font-treb w-3/4 text-center mx-auto my-auto"}>
                {message}</h1>
            <div className="md:w-3/4 md:mx-auto w-full md:h-full h-2/4 flex md:flex-col flex-row justify-between">
              <div className="my-auto md:mx-auto md:w-1/4 md:h-1/5 h-1/4 flex w-1/3">  
                <div className="mx-auto flex flex-row justify-end">
                <img src={img} className="ml-auto mr-0 rounded-full md:rounded-xl" alt=""/>
                <div className=" ml-1 mr-auto flex flex-col"> 
                
                  <h1 className={"md:text-base text-xs text-"+colorsClass[clr][0] +" font-treb w-full text-center mx-auto my-auto"}>
                    FROM
                  </h1>
                  <h1 className={"md:text-3xl text-xl -mt-2 text-"+colorsClass[clr][0] +" font-beb w-full text-center mx-auto my-auto"}>
                    {from}
                  </h1>
                </div>
                </div>
              </div>
            <div className="flex flex-col md:mx-auto md:h-1/3 my-auto w-1/3 md:w-2/3">
              
              <button onClick={""} className={"bg-"+colorsClass[clr][0].split("-")[0]+"-600 my-auto py-5 px-7 font-treb rounded-3xl text-white hover:bg-"+colorsClass[clr][0].split("-")[0]+"-700 focus:outline-none focus:ring-2 focus:ring-"+colorsClass[clr][0].split("-")[0]+"-600 focus:ring-opacity-50 mx-auto"}>
              Make a free Card
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
          </motion.div>   
    )
}

export default Design
