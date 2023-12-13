import React from 'react'

const FilterSection = () => {
  return (
    <div className='text-[#494c6b] text-sm flex justify-center gap-8 border-[#d2d3de]'>
        <button type='button' className='focus:font-bold'>All</button>
        <button type='button' className='focus:font-bold'></button>
        <button type='button' className='focus:font-bold'>Completed</button>
    </div>
  )
}

export default FilterSection