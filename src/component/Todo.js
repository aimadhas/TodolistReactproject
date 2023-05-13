import React from 'react'
import List from './List'
import { useReducer,useRef,useEffect,useState,createContext  } from 'react'
import {FaPlus} from "react-icons/fa";

const action1 = {
  display:'display',
  add:'add',
  delete:'delete',
  check:'check',
  all:'all',
  active:'active',
  completed:'completed',
  clear:'clear',
}


function Managelist(state, action){
  switch(action.type){
    case action1.display:
      action.payload.d2([...state,...action.payload.d1])
      return [...state,...action.payload.d1]
      // return action.payload
    case action1.add:
      action.payload.data([...state,{ id: Date.now(), text: action.payload.input, completed: false }])
      return [...state,{ id: Date.now(), text: action.payload.input, completed: false }]
      case action1.check:
        const result1 =   action.payload.data2.map(task => task.id === action.payload.id ? { ...task, completed: !task.completed } : task)
        action.payload.data(result1)
        return  result1
    case action1.delete:
      const result = state.filter(task => task.id !== action.payload.id);
      action.payload.data(result)
      return result
    case action1.all:
      return action.payload
    case action1.active:
      return action.payload.filter(task => task.completed === false);
    case action1.completed:
      return action.payload.filter(task => task.completed === true);
      case action1.clear:
        localStorage.removeItem('todo')
        return [];
    default:
      return state
  }
}

export const Appcontext= createContext()

export default function Todo(props) {
  const [state,dispatcher] = useReducer(Managelist,[])

  const [data,setdata] = useState([])

  const inputRef = useRef(null);
  useEffect(()=>{
    const totoData = JSON.parse(localStorage.getItem('todo'))
    if(totoData){
      dispatcher({type:action1.display, payload:{d1:totoData,d2:setdata}})
    }
  },[])

  const handleSubmit = (event) => {
    const inputValue = inputRef.current.value;
    event.preventDefault();
    if(inputValue.length>0){
      dispatcher({type:action1.add, payload:{input:inputValue,data:setdata}})
      inputRef.current.value = ''
    }
  }  


  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(data))
  },[data])


  return (
    <Appcontext.Provider value={{data:state,dispatcher:dispatcher,data2:setdata,data3:data}} >
    <div className='flex flex-col justify-center items-center'>
      <form action="" onSubmit={handleSubmit} className='w-1/2  mx-auto my-4 relative'>
        <FaPlus className='text-[#181820] absolute bg-[#fafafa] w-6 h-6 rounded-lg bottom-[10px] left-2'></FaPlus>
      <input type="text" className='w-full border-2 border-with outline-none py-2 px-10 border-[#4d4d5e]  bg-transparent text-white rounded-lg' placeholder='Add a task' ref={inputRef}/>
      </form>
      <List></List>
    </div>
    </Appcontext.Provider>

  )
}
