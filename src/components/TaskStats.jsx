import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const TaskStats = () => {
    const {darkTheme, getCount, completedItems} = useContext(AppContext)


  return (
    <div className={`${darkTheme ? 'bg-[#0e033d] text-white' : 'bg-white'} flex justify-between m-auto lg:mx-auto md:w-[50%] lg:w-[50%] rounded py-5 px-4 shadow-xl max-sm:mx-[5%]`}>
          <h2 className="text-[18px]">{ getCount() }</h2>
          <button onClick={completedItems}>Clear Completed</button>
          </div>
  )
}

export default TaskStats
