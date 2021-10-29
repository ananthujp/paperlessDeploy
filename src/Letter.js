import {useState} from "react"
import {motion} from "framer-motion"
import {setSlideInfo} from "./features/appSlice";
import {useDispatch} from "react-redux"
function Letter() {
    const [opened,setOpened]=useState(true)
    const dispatch = useDispatch();
    const handleOpening = (e)=>{
      setOpened(!opened);
      dispatch(
         setSlideInfo({
          letterOpened : opened,
             
         }))
      }
    const Anim={initial:{opacity:1},
        animate:{opacity:1,transition:{duration:0.5}},
        exit:{opacity:1,transition:{delay:0.5}}}
    // const LetterHover =()=> {return(<motion.div variants={Anim}
    //     initial="initial"
    //     animate="animate"
    //     exit="exit"
    //     whileHover={{ scale: 1.1 }}
    //     >
        
    //     <svg
    //   id="prefix__Layer_1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   x={0}
    //   y={0}
    //   viewBox="0 0 202 224.3"
    //   xmlSpace="preserve"

    // >
    //   <style>
    //     {
    //       ".prefix__st0{fill:#daeff6}.prefix__st1{fill:#eff8fb}.prefix__st2{fill:#96b1b6}"
    //     }
    //   </style>
    //   <path
    //     className="prefix__st0"
    //     d="M4.4 104.5v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.1.2-77.7 60.5-73.9-60.7H4.4z"
    //   />
    //   <path
    //     className="prefix__st1"
    //     d="M179 104.7l-77.7 60.5-73.9-60.7h-23v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.2.2zm15.2 108.4c0 3.3-2.9 6-6.5 6h-173c-3.6 0-6.5-2.7-6.5-6V106.9h16.9l76.2 62.9 78.9-62.7 14-.1v106.1z"
    //   />
    //   <path
    //     className="prefix__st2"
    //     d="M4.6 104.8s78.4 89.1 96.3 89.1c16.1 0 96.8-89 96.8-89s-3.1 2-6.5 2H10.1c-2.5-.1-5.5-2.1-5.5-2.1z"
    //   />
    //   <path
    //     className="prefix__st2"
    //     d="M120.5 150.2l4.7-3.7 64.9 64.1-76.8-56.6zM83 150.1l-5.7-4.6L13 211.9 89.2 154z"
    //   />
    //   <path
    //     className="prefix__st0"
    //     d="M6 219.1s77.3-79.4 95.3-79.4c16.1 0 95.3 79.4 95.3 79.4s-1.9 2.3-5.2 2.3H10.3c-2.6 0-4.3-2.3-4.3-2.3z"
    //   />
    //   <path
    //     className="prefix__st1"
    //     d="M192.2 214.8c-.8.4-1.8.8-3.1.8H12.5c-.9 0-1.7-.3-2.3-.7-2.7 2.7-4.2 4.3-4.2 4.3s1.8 2.3 4.3 2.3h181.1c3.4 0 5.2-2.3 5.2-2.3s-1.6-1.7-4.4-4.4z"
    //   />
    //   <path
    //     className="prefix__st1"
    //     d="M196.3 219.3s-79.2-79.4-95.3-79.4c-18 0-95.3 79.4-95.3 79.4S83 141.8 101 141.8c16.2 0 95.3 77.5 95.3 77.5z"
    //   />
    //   <path
    //     className="prefix__st0"
    //     d="M4.4 104.5s79 63 97 63c16.1 0 96.7-63 96.7-63s-3.3.1-6.6.1H10.4c-2.5 0-6-.1-6-.1z"
    //   />
    //   <path
    //     className="prefix__st1"
    //     d="M196.5 105.8s-79.2 61.5-95.3 61.5c-18 0-96.3-62.4-96.3-62.4s78.4 58 96.4 58c16.1.1 95.2-57.1 95.2-57.1z"
    //   />
    //   <path
    //     d="M44.8 135.3c21.3 16.5 46 33.9 55.4 33.9 7 0 25.9-11.2 43.5-24.5-18.1 12.4-36.9 22.3-43.5 22.3-9-.1-33.3-15.9-55.4-31.7z"
    //     fill="#afb6b7"
    //   />
    //   <g>
    //     <path
    //       className="prefix__st1"
    //       d="M198.1 104.5s-3.3.1-6.7.1H10.3c-2.6 0-6-.1-6-.1s-.1 0 3.9 4c39 0 152.8-.1 185.9-.1.1 0 4-3.9 4-3.9z"
    //     />
    //   </g>
    // </svg></motion.div>)}
    const LetterClosed =()=> {return(<motion.div variants={Anim}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover={{ scale: 1.1 }}
        >
        
        <svg
        id="prefix__Layer_1"
        xmlns="http://www.w3.org/2000/motion.svg"
        x={0}
        y={0}
        viewBox="0 0 202 224.3"
        xmlSpace="preserve"
        onClick={()=>handleOpening()}
        >
        <style>
          {
            ".prefix__st0{fill:#daeff6}.prefix__st1{fill:#eff8fb}.prefix__st2{fill:#96b1b6}"
          }
        </style>
        <path
          className="prefix__st0"
          d="M4.4 104.5v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.1.2-77.7 60.5-73.9-60.7H4.4z"
        />
        <path
          className="prefix__st1"
          d="M179 104.7l-77.7 60.5-73.9-60.7h-23v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.2.2zm15.2 108.4c0 3.3-2.9 6-6.5 6h-173c-3.6 0-6.5-2.7-6.5-6V106.9h16.9l76.2 62.9 78.9-62.7 14-.1v106.1z"
        />
        <path
          className="prefix__st2"
          d="M4.6 104.8s78.4 89.1 96.3 89.1c16.1 0 96.8-89 96.8-89s-3.1 2-6.5 2H10.1c-2.5-.1-5.5-2.1-5.5-2.1z"
        />
        <path
          className="prefix__st2"
          d="M120.5 150.2l4.7-3.7 64.9 64.1-76.8-56.6zM83 150.1l-5.7-4.6L13 211.9 89.2 154z"
        />
        <path
          className="prefix__st0"
          d="M6 219.1s77.3-79.4 95.3-79.4c16.1 0 95.3 79.4 95.3 79.4s-1.9 2.3-5.2 2.3H10.3c-2.6 0-4.3-2.3-4.3-2.3z"
        />
        <path
          className="prefix__st1"
          d="M192.2 214.8c-.8.4-1.8.8-3.1.8H12.5c-.9 0-1.7-.3-2.3-.7-2.7 2.7-4.2 4.3-4.2 4.3s1.8 2.3 4.3 2.3h181.1c3.4 0 5.2-2.3 5.2-2.3s-1.6-1.7-4.4-4.4z"
        />
        <path
          className="prefix__st1"
          d="M196.3 219.3s-79.2-79.4-95.3-79.4c-18 0-95.3 79.4-95.3 79.4S83 141.8 101 141.8c16.2 0 95.3 77.5 95.3 77.5z"
        />
        <path
          className="prefix__st0"
          d="M4.4 104.5s79 81.9 97 81.9c16.1 0 96.7-81.9 96.7-81.9s-3.3.1-6.6.1H10.4c-2.5 0-6-.1-6-.1z"
        />
        <path
          className="prefix__st1"
          d="M196.5 106.2s-79.2 80-95.3 80c-18 0-96.3-81.1-96.3-81.1s78.4 75.4 96.4 75.4c16.1 0 95.2-74.3 95.2-74.3z"
        />
        <path
          d="M44.8 144.6c21.3 21.4 46 44.1 55.4 44.1 7 0 25.9-14.6 43.5-31.9-18.1 16.1-36.9 29-43.5 29-9-.2-33.3-20.7-55.4-41.2z"
          fill="#afb6b7"
        />
        <g>
          <path
            className="prefix__st1"
            d="M198.1 104.5s-3.3.1-6.7.1H10.3c-2.6 0-6-.1-6-.1s-.1 0 3.9 4c39 0 152.8-.1 185.9-.1.1 0 4-3.9 4-3.9z"
          />
        </g>
      </svg></motion.div>)}
      const LetterOpened =()=> {return(<motion.div variants={Anim}
        initial="initial"
        animate="animate"
        exit="exit"><svg
        id="prefix__eJ3o7uUGQwk1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 202 224.3"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <style>
          {
            "@keyframes eJ3o7uUGQwk14_to__to{0%{transform:translate(101.250006px,136.850006px)}33.333333%,to{transform:translate(99.449994px,74.149929px)}}@keyframes eJ3o7uUGQwk14_ts__ts{0%{transform:scale(1,1)}33.333333%,to{transform:scale(1,-1.000002)}}"
          }
        </style>
        <g id="prefix__eJ3o7uUGQwk2">
          <g id="prefix__eJ3o7uUGQwk3">
            <g id="prefix__eJ3o7uUGQwk4">
              <path
                id="prefix__eJ3o7uUGQwk5"
                d="M4.4 104.5v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.1.2-77.7 60.5-73.9-60.7H4.4z"
                fill="#DAEFF6"
                stroke="none"
                strokeWidth={1}
              />
            </g>
            <g id="prefix__eJ3o7uUGQwk6">
              <path
                id="prefix__eJ3o7uUGQwk7"
                d="M179 104.7l-77.7 60.5-73.9-60.7h-23v110.6c0 3.5 3 6.3 6.8 6.3h180.2c3.7 0 6.8-2.8 6.8-6.3V104.5l-19.2.2zm15.2 108.4c0 3.3-2.9 6-6.5 6h-173c-3.6 0-6.5-2.7-6.5-6V106.9h16.9l76.2 62.9 78.9-62.7 14-.1v106.1z"
                fill="#EFF8FB"
                stroke="none"
                strokeWidth={1}
              />
            </g>
            <path
              id="prefix__eJ3o7uUGQwk8"
              d="M4.6 104.8s78.4 89.1 96.3 89.1c16.1 0 96.8-89 96.8-89s-3.1 2-6.5 2H10.1c-2.5-.1-5.5-2.1-5.5-2.1z"
              fill="#96B1B6"
              stroke="none"
              strokeWidth={1}
            />
            <path
              id="prefix__eJ3o7uUGQwk9"
              fill="#96B1B6"
              stroke="none"
              strokeWidth={1}
              d="M120.5 150.2l4.7-3.7 64.9 64.1-76.8-56.6z"
            />
            <path
              id="prefix__eJ3o7uUGQwk10"
              fill="#96B1B6"
              stroke="none"
              strokeWidth={1}
              d="M83 150.1l-5.7-4.6L13 211.9 89.2 154z"
            />
            <path
              id="prefix__eJ3o7uUGQwk11"
              d="M6 219.1s77.3-79.4 95.3-79.4c16.1 0 95.3 79.4 95.3 79.4s-1.9 2.3-5.2 2.3H10.3c-2.6 0-4.3-2.3-4.3-2.3z"
              fill="#DAEFF6"
              stroke="none"
              strokeWidth={1}
            />
            <path
              id="prefix__eJ3o7uUGQwk12"
              d="M192.2 214.8c-.8.4-1.8.8-3.1.8H12.5c-.9 0-1.7-.3-2.3-.7-2.7 2.7-4.2 4.3-4.2 4.3s1.8 2.3 4.3 2.3h181.1c3.4 0 5.2-2.3 5.2-2.3s-1.6-1.7-4.4-4.4z"
              fill="#EFF8FB"
              stroke="none"
              strokeWidth={1}
            />
            <path
              id="prefix__eJ3o7uUGQwk13"
              d="M196.3 219.3s-79.2-79.4-95.3-79.4c-18 0-95.3 79.4-95.3 79.4S83 141.8 101 141.8c16.2 0 95.3 77.5 95.3 77.5z"
              fill="#EFF8FB"
              stroke="none"
              strokeWidth={1}
            />
            <g
              style={{
                animation: "eJ3o7uUGQwk14_to__to 3000ms linear 1 normal forwards",
              }}
            >
              <g
                transform="translate(101.25 136.85)"
                style={{
                  animation:
                    "eJ3o7uUGQwk14_ts__ts 3000ms linear 1 normal forwards",
                }}
              >
                <g
                  id="prefix__eJ3o7uUGQwk14"
                  transform="translate(-101.25 -136.85)"
                  stroke="none"
                  strokeWidth={1}
                >
                  <path
                    id="prefix__eJ3o7uUGQwk15"
                    d="M4.4 104.5s79 63 97 63c16.1 0 96.7-63 96.7-63s-3.3.1-6.6.1H10.4c-2.5 0-6-.1-6-.1z"
                    fill="#DAEFF6"
                  />
                  <path
                    id="prefix__eJ3o7uUGQwk16"
                    d="M196.5 105.8s-79.2 61.5-95.3 61.5c-18 0-96.3-62.4-96.3-62.4s78.4 58 96.4 58c16.1.1 95.2-57.1 95.2-57.1z"
                    fill="#EFF8FB"
                  />
                  <path
                    id="prefix__eJ3o7uUGQwk17"
                    d="M44.8 135.3c21.3 16.5 46 33.9 55.4 33.9 7 0 25.9-11.2 43.5-24.5-18.1 12.4-36.9 22.3-43.5 22.3-9-.1-33.3-15.9-55.4-31.7z"
                    fill="#AFB6B7"
                  />
                </g>
              </g>
            </g>
            <g id="prefix__eJ3o7uUGQwk18">
              <path
                id="prefix__eJ3o7uUGQwk19"
                d="M198.1 104.5s-3.3.1-6.7.1H10.3c-2.6 0-6-.1-6-.1s-.1 0 3.9 4c39 0 152.8-.1 185.9-.1.1 0 4-3.9 4-3.9z"
                fill="#EFF8FB"
                stroke="none"
                strokeWidth={1}
              />
            </g>
          </g>
        </g>
      </svg></motion.div>)}
    return (
        <motion.div>
            {opened?<LetterClosed/>
    :<LetterOpened/>
    }
        </motion.div>
    )
}

export default Letter
