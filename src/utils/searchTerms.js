import {AiOutlineHome} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";
import {FaReact}  from "react-icons/fa";
import {BsMusicNoteList} from "react-icons/bs";
import {BiMoviePlay} from "react-icons/bi";
import {RiLiveLine} from "react-icons/ri";
import {TbDeviceGamepad2} from "react-icons/tb";
import {BsNewspaper}  from "react-icons/bs";
import {MdOutlineSportsTennis} from "react-icons/md";
import {MdOutlineCastForEducation} from "react-icons/md";
import {FaShopware}  from "react-icons/fa";
import {FiSettings}  from "react-icons/fi";
import {FiHelpCircle}  from "react-icons/fi";
import {VscFeedback} from "react-icons/vsc";
import {VscLibrary}  from "react-icons/vsc";


export const categories = [
    { name: 'New', icon: <AiOutlineHome className="h-5 w-5" />, },
    { name: 'Trending', icon: <BiTrendingUp className="h-5 w-5" /> },
    { name: 'ReactJS', icon: <FaReact className="h-5 w-5"/>, },
    { name: 'NextJS', icon: <FaReact className="h-6 w-6"/>, },
    { name: 'Music', icon: <BsMusicNoteList className="h-6 w-6"/>, },
    { name: 'Movies', icon: <BiMoviePlay className="h-6 w-6"/>, },
    { name: 'Live', icon: <RiLiveLine className="h-6 w-6"/>, },
    { name: 'Gaming', icon: <TbDeviceGamepad2 className="h-6 w-6"/>, },
    { name: 'News', icon: <BsNewspaper className="h-6 w-6"/>, },
    { name: 'Sports', icon: <MdOutlineSportsTennis className="h-6 w-6"/>, },
    { name: 'Learning', icon: <MdOutlineCastForEducation className="h-6 w-6"/>, },
    { name: 'Fashion', icon: <FaShopware className="h-6 w-6"/>, },
    { name: 'Settings', icon: <FiSettings className="h-6 w-6"/>, },
    { name: 'Help', icon: <FiHelpCircle className="h-6 w-6"/>, },
    { name: 'Feedback', icon: <VscFeedback className="h-6 w-6"/>, },
    { name: 'Library', icon: <VscLibrary className="h-6 w-6"/>, },
    
  ];