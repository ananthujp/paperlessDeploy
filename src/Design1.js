import {motion} from "framer-motion"

function Design1() {
    return (
        <motion.div
        initial={{height:"0%", width:"0%"}}
      animate={{height:"100%", width:"100%",transition:{delay:1.4}}}>
          <div className="absolute flex z-1 w-screen h-screen">
          <motion.div
                className="bg-des1-lamp1 bg-no-repeat w-1/2 h-1/2 ml-auto mt-auto mr-0 mb-0">
            </motion.div>
              </div>
            <div className="absolute flex z-1 w-screen h-screen">
            <motion.div
                initial={{ rotate: '0deg' }}
                animate={{ rotate: '360deg',transition:{ duration: 20, repeat: Infinity,ease:"linear"} }}
                className="bg-des1-circle1 bg-no-repeat w-1/2 h-1/2 ml-1/3 mt-1/3">
            </motion.div></div>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288.6 287.6"
      width="100%" height="100%"
      preserveAspectRatio="none"
    >
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={275.516}
        y1={278.575}
        x2={33.029}
        y2={19.364}
      >
        <stop offset={0} stopColor="#ad5f21" />
        <stop offset={0.282} stopColor="#6e3543" />
        <stop offset={0.517} stopColor="#431c4b" />
        <stop offset={1} stopColor="#2a112f" />
      </linearGradient>
      <path fill="url(#prefix__a)" d="M.6-.7h288V278H.6z" />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={279.106}
        y1={286.743}
        x2={30.136}
        y2={20.602}
      >
        <stop offset={0} stopColor="#ad5f21" />
        <stop offset={0.282} stopColor="#6e3543" />
        <stop offset={0.517} stopColor="#431c4b" />
        <stop offset={1} stopColor="#2a112f" />
      </linearGradient>
      <path fill="url(#prefix__b)" d="M-.4-2.6h290.1v291.3H-.4z" />
      <linearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={112.189}
        y1={237.161}
        x2={-82.266}
        y2={-12.854}
      >
        <stop offset={0} stopColor="#f7a509" />
        <stop offset={0.348} stopColor="#7c572e" />
        <stop offset={0.641} stopColor="#332821" />
        <stop offset={0.848} stopColor="#0d0c0c" />
        <stop offset={0.951} stopColor="#020203" />
      </linearGradient>
      <path fill="url(#prefix__c)" d="M151.6 280.2l-5.9 3.5-5.9-3.5 5.9-3.5z" />
      <linearGradient
        id="prefix__d"
        gradientUnits="userSpaceOnUse"
        x1={123.567}
        y1={228.311}
        x2={-70.891}
        y2={-21.705}
      >
        <stop offset={0} stopColor="#f7a509" />
        <stop offset={0.348} stopColor="#7c572e" />
        <stop offset={0.641} stopColor="#332821" />
        <stop offset={0.848} stopColor="#0d0c0c" />
        <stop offset={0.951} stopColor="#020203" />
      </linearGradient>
      <path fill="url(#prefix__d)" d="M167.6 280.2l-3.7 2.2-3.7-2.2 3.7-2.2z" />
      <linearGradient
        id="prefix__e"
        gradientUnits="userSpaceOnUse"
        x1={119.025}
        y1={231.843}
        x2={-75.435}
        y2={-18.176}
      >
        <stop offset={0} stopColor="#f7a509" />
        <stop offset={0.348} stopColor="#7c572e" />
        <stop offset={0.641} stopColor="#332821" />
        <stop offset={0.848} stopColor="#0d0c0c" />
        <stop offset={0.951} stopColor="#020203" />
      </linearGradient>
      <path fill="url(#prefix__e)" d="M160.3 280.2l-3.7 2.2-3.7-2.2 3.7-2.2z" />
      <g>
        <linearGradient
          id="prefix__f"
          gradientUnits="userSpaceOnUse"
          x1={105.353}
          y1={242.477}
          x2={-89.104}
          y2={-7.539}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          fill="url(#prefix__f)"
          d="M138.4 280.2l-3.7 2.2-3.7-2.2 3.7-2.2z"
        />
        <linearGradient
          id="prefix__g"
          gradientUnits="userSpaceOnUse"
          x1={100.812}
          y1={246.01}
          x2={-93.645}
          y2={-4.006}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          fill="url(#prefix__g)"
          d="M131.1 280.2l-3.7 2.2-3.7-2.2 3.7-2.2z"
        />
      </g>
      <g>
        <linearGradient
          id="prefix__h"
          gradientUnits="userSpaceOnUse"
          x1={62.999}
          y1={275.419}
          x2={-131.457}
          y2={25.404}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          d="M120 280.6l-106.9-.3c-.1 0-.3 0-.3-.1s.1-.1.3-.1l106.9-.3c.2 0 .4.2.4.4s-.1.4-.4.4z"
          fill="url(#prefix__h)"
        />
        <linearGradient
          id="prefix__i"
          gradientUnits="userSpaceOnUse"
          x1={97.551}
          y1={248.562}
          x2={-96.842}
          y2={-1.372}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          d="M122.8 280.2c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.2.6.6z"
          fill="url(#prefix__i)"
        />
      </g>
      <g>
        <linearGradient
          id="prefix__j"
          gradientUnits="userSpaceOnUse"
          x1={161.504}
          y1={198.804}
          x2={-32.952}
          y2={-51.211}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          d="M171.5 279.8l106.9.3c.1 0 .3 0 .3.1s-.1.1-.3.1l-106.9.3c-.2 0-.4-.2-.4-.4s.1-.4.4-.4z"
          fill="url(#prefix__j)"
        />
        <linearGradient
          id="prefix__k"
          gradientUnits="userSpaceOnUse"
          x1={126.724}
          y1={225.884}
          x2={-67.669}
          y2={-24.05}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          d="M169.6 280.2c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.2.6.6z"
          fill="url(#prefix__k)"
        />
      </g>
      <g>
        <linearGradient
          id="prefix__l"
          gradientUnits="userSpaceOnUse"
          x1={244.409}
          y1={134.466}
          x2={49.954}
          y2={-115.548}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__l)" d="M151.6 7.5l-5.9 3.5-5.9-3.5 5.9-3.5z" />
        <linearGradient
          id="prefix__m"
          gradientUnits="userSpaceOnUse"
          x1={255.787}
          y1={125.618}
          x2={61.33}
          y2={-124.398}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__m)" d="M167.6 7.5l-3.7 2.2-3.7-2.2 3.7-2.2z" />
        <linearGradient
          id="prefix__n"
          gradientUnits="userSpaceOnUse"
          x1={251.247}
          y1={129.152}
          x2={56.788}
          y2={-120.867}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__n)" d="M160.3 7.5l-3.7 2.2-3.7-2.2 3.7-2.2z" />
        <g>
          <linearGradient
            id="prefix__o"
            gradientUnits="userSpaceOnUse"
            x1={237.574}
            y1={139.784}
            x2={43.117}
            y2={-110.232}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__o)"
            d="M138.4 7.5l-3.7 2.2-3.7-2.2 3.7-2.2z"
          />
          <linearGradient
            id="prefix__p"
            gradientUnits="userSpaceOnUse"
            x1={233.032}
            y1={143.316}
            x2={38.576}
            y2={-106.7}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__p)"
            d="M131.1 7.5l-3.7 2.2-3.7-2.2 3.7-2.2z"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__q"
            gradientUnits="userSpaceOnUse"
            x1={195.22}
            y1={172.725}
            x2={0.763}
            y2={-77.29}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M120 7.9L13.1 7.6c-.1 0-.3 0-.3-.1s.1-.1.3-.1L120 7.1c.2 0 .4.2.4.4s-.1.4-.4.4z"
            fill="url(#prefix__q)"
          />
          <linearGradient
            id="prefix__r"
            gradientUnits="userSpaceOnUse"
            x1={229.729}
            y1={145.813}
            x2={35.336}
            y2={-104.121}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M122.8 7.5c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.3.6.6z"
            fill="url(#prefix__r)"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__s"
            gradientUnits="userSpaceOnUse"
            x1={293.725}
            y1={96.111}
            x2={99.268}
            y2={-153.904}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M171.5 7.1l106.9.3c.1 0 .3 0 .3.1s-.1.1-.3.1l-106.9.3c-.2 0-.4-.2-.4-.4s.1-.4.4-.4z"
            fill="url(#prefix__s)"
          />
          <linearGradient
            id="prefix__t"
            gradientUnits="userSpaceOnUse"
            x1={258.901}
            y1={123.135}
            x2={64.508}
            y2={-126.799}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M169.6 7.5c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.3.6.6z"
            fill="url(#prefix__t)"
          />
        </g>
      </g>
      <g>
        <linearGradient
          id="prefix__u"
          gradientUnits="userSpaceOnUse"
          x1={93.366}
          y1={251.779}
          x2={-100.986}
          y2={1.898}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__u)" d="M9.3 149.6l-3.5-5.9 3.5-5.9 3.5 5.9z" />
        <linearGradient
          id="prefix__v"
          gradientUnits="userSpaceOnUse"
          x1={84.523}
          y1={258.659}
          x2={-109.831}
          y2={8.776}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__v)" d="M9.3 165.7L7.2 162l2.1-3.7 2.2 3.7z" />
        <linearGradient
          id="prefix__w"
          gradientUnits="userSpaceOnUse"
          x1={88.054}
          y1={255.914}
          x2={-106.302}
          y2={6.028}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path fill="url(#prefix__w)" d="M9.3 158.4l-2.1-3.7 2.1-3.7 2.2 3.7z" />
        <g>
          <linearGradient
            id="prefix__x"
            gradientUnits="userSpaceOnUse"
            x1={98.681}
            y1={247.647}
            x2={-95.673}
            y2={-2.236}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__x)"
            d="M9.3 136.5l-2.1-3.7 2.1-3.7 2.2 3.7z"
          />
          <linearGradient
            id="prefix__y"
            gradientUnits="userSpaceOnUse"
            x1={102.211}
            y1={244.901}
            x2={-92.142}
            y2={-4.982}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__y)"
            d="M9.3 129.2l-2.1-3.7 2.1-3.7 2.2 3.7z"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__z"
            gradientUnits="userSpaceOnUse"
            x1={131.574}
            y1={222.063}
            x2={-62.78}
            y2={-27.82}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M8.9 118.1l.3-106.8c0-.1 0-.3.1-.3s.1.1.1.3l.3 106.8c0 .2-.2.4-.4.4s-.4-.1-.4-.4z"
            fill="url(#prefix__z)"
          />
          <linearGradient
            id="prefix__A"
            gradientUnits="userSpaceOnUse"
            x1={104.772}
            y1={242.95}
            x2={-89.621}
            y2={-6.984}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M9.3 120.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.2.6-.6.6z"
            fill="url(#prefix__A)"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__B"
            gradientUnits="userSpaceOnUse"
            x1={55.063}
            y1={281.572}
            x2={-139.291}
            y2={31.689}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M9.7 169.6l-.3 106.8c0 .1 0 .3-.1.3s-.1-.1-.1-.3l-.3-106.8c0-.2.2-.4.4-.4.3-.1.4.1.4.4 0-.1 0-.1 0 0z"
            fill="url(#prefix__B)"
          />
          <linearGradient
            id="prefix__C"
            gradientUnits="userSpaceOnUse"
            x1={82.094}
            y1={260.579}
            x2={-112.299}
            y2={10.645}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M9.3 167.6c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6c0 .4-.2.6-.6.6z"
            fill="url(#prefix__C)"
          />
        </g>
      </g>
      <g>
        <linearGradient
          id="prefix__D"
          gradientUnits="userSpaceOnUse"
          x1={263.42}
          y1={119.63}
          x2={69.067}
          y2={-130.252}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          fill="url(#prefix__D)"
          d="M282.2 149.6l-3.5-5.9 3.5-5.9 3.5 5.9z"
        />
        <linearGradient
          id="prefix__E"
          gradientUnits="userSpaceOnUse"
          x1={254.575}
          y1={126.509}
          x2={60.221}
          y2={-123.374}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          fill="url(#prefix__E)"
          d="M282.2 165.7L280 162l2.2-3.7 2.2 3.7z"
        />
        <linearGradient
          id="prefix__F"
          gradientUnits="userSpaceOnUse"
          x1={258.105}
          y1={123.762}
          x2={63.75}
          y2={-126.124}
        >
          <stop offset={0} stopColor="#f7a509" />
          <stop offset={0.348} stopColor="#7c572e" />
          <stop offset={0.641} stopColor="#332821" />
          <stop offset={0.848} stopColor="#0d0c0c" />
          <stop offset={0.951} stopColor="#020203" />
        </linearGradient>
        <path
          fill="url(#prefix__F)"
          d="M282.2 158.4l-2.2-3.7 2.2-3.7 2.2 3.7z"
        />
        <g>
          <linearGradient
            id="prefix__G"
            gradientUnits="userSpaceOnUse"
            x1={268.733}
            y1={115.497}
            x2={74.38}
            y2={-134.387}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__G)"
            d="M282.2 136.5l-2.2-3.7 2.2-3.7 2.2 3.7z"
          />
          <linearGradient
            id="prefix__H"
            gradientUnits="userSpaceOnUse"
            x1={272.264}
            y1={112.751}
            x2={77.911}
            y2={-137.132}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            fill="url(#prefix__H)"
            d="M282.2 129.2l-2.2-3.7 2.2-3.7 2.2 3.7z"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__I"
            gradientUnits="userSpaceOnUse"
            x1={301.627}
            y1={89.913}
            x2={107.273}
            y2={-159.97}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M281.8 118.1l.3-106.8c0-.1 0-.3.1-.3s.1.1.1.3l.3 106.8c0 .2-.2.4-.4.4s-.4-.1-.4-.4z"
            fill="url(#prefix__I)"
          />
          <linearGradient
            id="prefix__J"
            gradientUnits="userSpaceOnUse"
            x1={274.803}
            y1={110.773}
            x2={80.41}
            y2={-139.161}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M282.2 120.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z"
            fill="url(#prefix__J)"
          />
        </g>
        <g>
          <linearGradient
            id="prefix__K"
            gradientUnits="userSpaceOnUse"
            x1={225.115}
            y1={149.422}
            x2={30.761}
            y2={-100.462}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M282.6 169.6l-.3 106.8c0 .1 0 .3-.1.3s-.1-.1-.1-.3l-.3-106.8c0-.2.2-.4.4-.4.2-.1.4.1.4.4 0-.1 0-.1 0 0z"
            fill="url(#prefix__K)"
          />
          <linearGradient
            id="prefix__L"
            gradientUnits="userSpaceOnUse"
            x1={252.125}
            y1={128.401}
            x2={57.732}
            y2={-121.532}
          >
            <stop offset={0} stopColor="#f7a509" />
            <stop offset={0.348} stopColor="#7c572e" />
            <stop offset={0.641} stopColor="#332821" />
            <stop offset={0.848} stopColor="#0d0c0c" />
            <stop offset={0.951} stopColor="#020203" />
          </linearGradient>
          <path
            d="M282.2 167.6c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6c0 .4-.3.6-.6.6z"
            fill="url(#prefix__L)"
          />
        </g>
      </g>
    </svg>
    
       
        </motion.div>

    )
}

export default Design1
