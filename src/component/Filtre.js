import React from 'react'
import { useContext} from 'react'
import {Appcontext } from './Todo'

export default function Filtre() {
  const  AllData = useContext(Appcontext)
  return (
       <div className='mt-2 w-1/2 mx-auto flex justify-between bg-white py-2 px-4 rounded-lg'>
        <div className='flex gap-5'>
            <button onClick={()=>{
                   AllData.dispatcher({type:'all' ,payload:AllData.data3})
                }}>All</button>
            <button onClick={()=>{
              AllData.dispatcher({type:'active' ,payload:AllData.data3})
            }}
            >Active</button>
            <button onClick={()=>{
              AllData.dispatcher({type:'completed' ,payload:AllData.data3})
            }}>Completed</button>
        </div>
            <button onClick={()=>{
              AllData.dispatcher({type:'clear'})
            }}>Clear</button>
        </div>
  )
}