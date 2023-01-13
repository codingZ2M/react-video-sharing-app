import React, {useState}  from 'react'
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import { Link } from 'react-router-dom';

import {categories} from '../utils/searchTerms'

const SideBar = ({setSelectedCategory}) => {
  const [closeButtonOpen, setCloseButtonOpen] = useState(true);

  return (
    <div className="flex-col sm:flex-row w-[150px]  fixed h-full top-24">
    <div className='flex mb-6'>
    { closeButtonOpen  === false ?
          <AiOutlineMenu className='text-text w-6 h-6 xl:w-12 xl:h-12' onClick={() => setCloseButtonOpen(true)}/>
    : 
          <AiOutlineClose className='text-white w-6 h-6 xl:w-12 xl:h-12'  onClick={() => setCloseButtonOpen(false)}/>
    }
    </div>    
        <div className={closeButtonOpen === true ? 'scale-100 opacity-100 overflow-y-scroll scrollbar-hide space-y-6 bg-black p-2' : 'scale-0' }>
        {
          categories.map( (category, index) => (
              <div className="flex gap-4 cursor-pointer text-white" onClick={()=> setSelectedCategory(category.name)} key={index}>
                <div> {category.icon} </div>
                <span className="text-base font-normal"> {category.name}</span>
             </div>
          ))
        }

        </div>
    </div>
  )
}

export default SideBar