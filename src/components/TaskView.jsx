import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'
import { MdCancel, MdDeleteForever, MdCheck } from "react-icons/md";

const TaskView = () => {
    const {darkTheme, handleToggle, todos, removeTodo } = useContext(AppContext)





  return (
    <div className={`${darkTheme ? 'bg-[#0e033d]  text-white' : 'bg-white' } flex  p-4 h-12 items-center justify-between text-blue-500 lg:w-[50%] md:w-[50%] m-auto shadow-2xl mt-1 mb-1 max-sm:mx-[5%] `}>
      
      <div className="items-center flex p-7 justify-between gap-5  ">
        {todos.complete ? <MdCheck className="h-5 w-5 text-blue-500" onClick={() => handleToggle(todos.id)} /> : <MdCancel className="h-5 w-5 text-blue-500" onClick={() => handleToggle(todos.id)} /> }
        <h2 className={`${todos.complete && "line-through"} `}>{todos.title}</h2>
      </div>
      <div>
       <MdDeleteForever className="col text-red-500  h-5 w-5" onClick={()=> removeTodo(todos.id)}/>
      </div>
    
  </div>
  )
}

export default TaskView
