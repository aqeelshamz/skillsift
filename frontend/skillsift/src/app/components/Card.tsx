"use-client"
import React from 'react'
import Link from 'next/link';
import { BsBookmark } from "react-icons/bs";
import Chip from './Chip';

function Card(props:any) {
  return (
   
   <div className="bg-white h-[450px] overflow-hidden  font-semibold flex-row items-center justify-center text-center rounded-xl border shadow-lg p-1 max-w-xs">
     {/* date and bookmark */}
     <div className='bg-red-200 w-[300px] overflow-hidden  h-[357px] rounded-xl '>
        <div className="flex justify-between p-3">
        <span className="bg-white text-lg font-semibold p-2 rounded-2xl">20 may 2023</span>
        <span className="bg-white text-lg font-semibold w-10 h-10 flex justify-center items-center rounded-full"><BsBookmark size={22}/></span>
      </div>

      {/* company , job title and logo */}


      <div className="grid grid-cols-4">
          <div className="col-span-3 text-left p-2 ">
           <span className='text-base mb-7'>Google</span> 
           
          
            <div className="text-2xl">First column with 10 units Content for the first column</div>
          

            
          </div>
          <div className="flex justify-center items-center">
          <img className=" mb-3 w-14 h-14 rounded-full shadow-lg mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByhd8Mht5FcIRvFFNMJWI_7SUT9cTzWfaQIZLkmVkAKzmutywBXiqFWoQb8lHi0L7yfk&usqp=CAU" alt="product designer"/>

          </div>
        </div>

     
 
<div className="flex space-x- flex-wrap justify-start overflow-hidden  px-3 py-1">
 <Chip text='qweqwerty'/>
 <Chip text='tewertxt'/>
 <Chip text='tewertyxt'/>
 <Chip text='qweqwerty'/>
 <Chip text='tewertxt'/>
 <Chip text='tewertyxt'/>
 <Chip text='qweqwerty'/>
 <Chip text='tewertxt'/>
 <Chip text='tewertyxt'/>
 
</div>

      



      


    
    
    </div>
    {/* salary & location */}
    <div className="flex items-center">
      <div className="bg-white w-[300px] overflow-hidden  h-[350px] rounded-xl ">
        <div className="flex justify-between items-center p-3">
          <div className="text-left">  <span className="bg-white text-lg font-semibold p-2 rounded-2xl">₹ 2,00,000</span>
       <br /> <span className="bg-white text-base font-semibold p-2 opacity-60 rounded-2xl">Kochi</span>
       </div>
       <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Details</button>
       </div>
        </div>
    </div>
     </div>
     
     
     
  
    
  

  )
}

export default Card