import React, { useContext } from 'react'
import TaskFilter from './TaskFilter'
import { AppContext } from '../context/AppContextProvider'

const Card = () => {
    const {keepFiltering} = useContext(AppContext)



  return (
    <div className='m-auto max-sm:mx-[5%] lg:mx-auto lg:w-[50%] md:w-[50%] sm:w-[90%]'>
      <TaskFilter/>
        {keepFiltering()}
    </div>
  )
}

export default Card
