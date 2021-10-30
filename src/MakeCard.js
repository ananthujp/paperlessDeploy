
import { selectUser,logout} from './features/userSlice';

import {useSelector,useDispatch} from "react-redux"
import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {useState} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider,createTheme} from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import {WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,FacebookShareButton,FacebookIcon} from "react-share"
import des3 from "./media/des3.png"
import Design3 from "./Design3"
const theme = createTheme({
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h2',
              h2: 'h2',
              h3: 'h2',
              h4: 'h2',
              h5: 'h2',
              h6: 'h2',
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
      },
    palette: {
      primary: deepPurple,
      secondary: deepPurple,
    },
  })
function MakeCard() {
    const dispatch = useDispatch();
    const user=useSelector(selectUser);
    const [avatar,setAvatar]=useState(true)
    const [des,setDes]=useState(0)
    const [preview,setPreview]=useState(false)
    const [created,setCreated]=useState(false)
    const [message,setMessage]=useState("")
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [error,setError]=useState(0)
    const [copied,setCopy]=useState(false)
    const [url,setUrl]=useState("http://localhost:3000/Cards/")
    const baseUrl="http://localhost:3000/Cards/"
    const titleMsg="See the paper free greeting card created by Me using Green Club free greeting card maker"
    const fbDesc="Details of the movement"
    const handleSubmit=()=>{
        
        if(to==="" || message===""){
            if(to==="" && message===""){
                setError(3);
            }
            else if(to===""){
                setError(1);
            }
            else if(message===""){
                setError(2);
            }
        }
        else{
            setError(5);
        addDoc(collection(db, "cards"), {
            from: (from?from:user.displayName),
            message: message,
            src:avatar?user.photo:null,
            to:to,
          }).then(doc=>{setUrl(baseUrl+doc.id);setCreated(true)});
        }
    }
    const handleHome=()=>{
        dispatch(
            logout());
    }

    return (
        <div>{preview?
            <div className="w-screen absolute z-20 h-full">
                <div className="absolute w-screen flex"><div onClick={()=>setPreview(false)} className="flex cursor-pointer bg-white rounded-full px-2 flex-row text-purple-600 hover:text-purple-300 mx-auto">Close Preview<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div></div>
                <Design3
                message={message} img={avatar?user.photo:null} from={from?from:user.displayName}/>
            </div>  
                :<></>}

                {created?
                <div className="w-screen absolute z-20 h-full ">
                <div className="w-screen h-1/4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200"></div>
                <div className="w-screen flex h-3/4 flex-col  bg-gradient-to-br from-purple-500 to-indigo-500 ">
                    <div  className="mx-auto flex cursor-pointer" onClick={()=>setCreated(!created)}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg></div>
                    <h1 className="text-6xl font-beb mx-auto mt-3 text-white">Congratulations!</h1>
                    <h1 className="text-2xl -mt-0 font-beb mx-auto text-white">You have succesully created your card</h1>
                    <div className="flex flex-row mx-auto my-5">
                        <input class="rounded-l-lg  px-4 py-0 border-t border-b border-l text-gray-800 border-gray-200 bg-white outline-none" value={url} readonly="readonly"/>
		                <CopyToClipboard text={url}
                        onCopy={() => setCopy(true)}>
                        <button class={"px-4 rounded-r-lg "+ (copied?"bg-purple-800  border-purple-400 text-gray-200 ":"bg-yellow-400  border-yellow-500 text-gray-800 ")+" font-bold p-4 uppercase border-t border-b border-r"}>{copied?"Copied":"Copy"}</button>
                        </CopyToClipboard>
                    </div>
                    <div className="mx-auto"><h1 className="-ml-40 text-md text-white mb-4">Share on social media :</h1></div>
                    <div className="mx-auto flex w-72 justify-between">
                        <WhatsappShareButton title={titleMsg} url={url} separator="">
                        <WhatsappIcon  round/>
                        </WhatsappShareButton>
                        <FacebookShareButton
                            url={url}
                            quote={titleMsg}
                            hashtag={"#iitgn"}
                            description={fbDesc}
                        >
                            <FacebookIcon round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            title={titleMsg}
                            url={url}
                            hashtags={["iitgn", "greenclub"]}
                        >
                            <TwitterIcon round />
                            
                        </TwitterShareButton>
                    </div>
                    <button onClick={handleHome} class="mx-auto mt-6 flex shadow w-32 border-purple-600 border-2 rounded-full focus:outline-none  px-4 py-2 text-purple-600 font-treb hover:bg-purple-600 bg-purple-300 hover:text-white">
                    <svg className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}

                        >
                        <path d="M12 2.1L1 12h3v9h7v-6h2v6h7v-9h3L12 2.1zm0 2.691l6 5.4V19h-3v-6H9v6H6v-8.809l6-5.4z" />
                        </svg>
                        <span className="mx-auto my-auto">Home</span>
                    </button>
                </div>
                </div>  
                :<></>}
            <div className="w-4/5 flex flex-col mx-auto h-screen">
                <h1 className="text-3xl font-beb mx-auto mt-3 text-purple-600">Design your own</h1>
                <h1 className="text-8xl -mt-0 font-beb mx-auto text-purple-600">card</h1>
                <div className="w-full flex flex-col mx-auto my-2 justify-between h-full">
                <ThemeProvider theme={theme}>
                    <div>
                        <h1 className="text-xl text-purple-700">From</h1>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col my-auto">
                                <TextField  id="outlined-basic" defaultValue={user.displayName} onChange={ (event) => setFrom(event.target.value) } label="Your name" variant="outlined"/>
                            </div>
                            <div className="flex flex-col my-auto mx-auto">
                                <img className={"rounded-full w-16 mt-2 filter "+(avatar?"": "grayscale")} alt="" src={user.photo} />
                                <Checkbox defaultChecked onChange={e => {
                                    setAvatar(e.target.checked); }}/>
                            </div>
                        </div>
                </div>
                <div>
                    <h1 className="text-xl text-purple-700">To</h1>
                    <div className="flex flex-row justify-between mt-3">           
                            <TextField error={(error===1 || error===3)?true:false} id="outlined-basic" onChange={ (event) => setTo(event.target.value) } label="Recipient's name" variant="outlined"/>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-xl text-purple-700">Message</h1>
                    <div className="flex justify-between mt-3">
                   
                    <TextField error={(error===2 || error===3)?true:false} id="outlined-basic" fullWidth onChange={ (event) => setMessage(event.target.value)} label="Enter your message here" variant="outlined"/>
                
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl text-purple-700 mb-3">Select a design</h1>
                    <div className="flex flex-row justify-between">
                        <img onClick={()=>setDes(1)} className={"rounded-xl overflow-hidden"+(des===1?"border outline-none ring-2 ring-purple-600 ring-offset-2":"")} src={des3} alt=""/>
                        <img onClick={()=>setDes(2)} className={"rounded-xl overflow-hidden"+(des===2?"border outline-none ring-2 ring-purple-600 ring-offset-2":"")} src={des3} alt=""/>
                        
                    </div>
                </div>
                <div className="flex flex-col h-20 justify-between">
                <Button variant="outlined" onClick={() => setPreview(true)}>Preview</Button>
                <Button variant="contained"  onClick={handleSubmit}>{(error==="5")?<CircularProgress style={{padding: "6px"}} color="inherit"/>:"Create"}</Button>
                    
                </div>
                </ThemeProvider>
                
                </div>
                
        </div>
        </div>
    )
}

export default MakeCard
