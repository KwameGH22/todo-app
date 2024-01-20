import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const Form = () => {
    const {darkTheme, itemList, setItemList, handleSubmit} = useContext(AppContext)






  return (
    <div className={`${darkTheme? 'bg-[#0e033d]' : 'bg-white'} lg:mx-auto lg:w-[50%]  flex md:w-[50%]  rounded justify-between m-auto px-2 max-sm:mx-[5%]`}>
        <div>
          <form onSubmit={handleSubmit} className='flex '>
            <input type="text" placeholder="Create new ToDo item"  className={`${darkTheme? 'text-white': 'text-gray-400'} p-6 text-base rounded h-1 outline-none bg-transparent`}
              onChange={(event) => setItemList(event.target.value)}
              name = 'task'
              value={itemList}
              required
              autoFocus
            />
          </form>
        </div>
        <div>
          <button type="submit" className={`${darkTheme? ' bg-gradient-to-r from-[#9947D7] to-blue-700' : 'bg-blue-700'} btn text-lg font-bold text-white py-2 px-5 h-10 mt-1 rounded-2xl`} onClick={handleSubmit}>
              Add
          </button>
        </div>
    </div>
  )
}

export default Form
