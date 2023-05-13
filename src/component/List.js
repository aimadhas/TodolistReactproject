import React from 'react'
import Filter from './Filtre'
import Todos from './Todos'
import { useContext} from 'react'
import {Appcontext } from './Todo'
export default function List() {
    const  AllData = useContext(Appcontext)
  return (
            <>
            <Filter></Filter>
            <div className='w-1/2 mx-auto mt-6'>
                {AllData.data.map((e)=>(
                    <Todos key={e.id} text={e.text} complete={e.completed} dispatcher={AllData.dispatcher} data2={AllData.data2}  id={e.id} data3={AllData.data3} ></Todos>
                ))}
            </div>
            </>
      )
    }
    