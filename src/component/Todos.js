import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
export default function Todos(props) {
    const [hidden,block] = useState('hidden')
    const [isChecked, setIsChecked] = useState(false);
    function handleMouseEnter(){
        block('block')
    }
    function handleMouseLeave(){
        block('hidden')
    }
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
  return (
    <div className='w-full flex justify-between bg-white py-4 px-4 rounded-lg mb-3 'onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <div className='flex gap-2'>
    <input  type='checkbox' onClick={()=>{props.dispatcher({type:'check',payload:{id:props.id,data:props.data2,data2:props.data3}})
                }} checked={props.complete} onChange={handleCheckboxChange} />
    <p className={`${props.complete ? 'line-through text-gray-400':''}`} >{props.text}</p>
    </div>
    <FaTrashAlt  className={`${hidden} cursor-pointer`}  onClick={()=>{
        props.dispatcher({type:'delete',payload:{id:props.id,data:props.data2}})
    }} >Delet</FaTrashAlt>
    </div>
  )
}
