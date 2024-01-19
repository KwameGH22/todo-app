import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const TaskFilter = () => {
    const {darkTheme, setFilterValue } = useContext(AppContext)





  return (
    <div className={`${darkTheme ? 'bg-[#0e033d] text-white' : 'bg-white'} lg:mx-auto lg:w-[50%] md:w-[50%] m-auto rounded divide-y divide-red-950 shadow max-sm:mx-[5%]`}>
    <div className="flex justify-center gap-8 py-6 px-7 mt-1 rounded-md">
      <button onClick={() => setFilterValue("all")}>All</button>
      <button onClick={() => setFilterValue("active")}>Active</button>
      <button onClick={() => setFilterValue("complete")}>Completed</button>
    </div>

  </div>
  )
}

export default TaskFilter
