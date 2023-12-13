import { useState } from 'react'
import Form from './components/Form'


import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='min-h-screen pb-20 bg-[#F2F2F2] text-white'>
      <div className='bg-mobile-image bg-no-repeat bg-cover h-52 px-5 py-8'>
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto'>
          <p className='text-3xl font-semibold tracking-[6px]'>1000</p>
          <BsMoonFill className='h-6 w-6' />
        </div>
        <div className='mt-10 lg:w-[50%] lg:mx-auto'>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default App
