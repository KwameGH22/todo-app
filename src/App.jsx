import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`min-h-screen pb-20 ${
      darkTheme
        ? 'bg-gradient-to-r from-[#9947D7] via-[#8B83F8] to-[#76A2F9]'
        : 'bg-[#F2F2F2]'
    }`}>
        <div className='w-full h-52 m-auto bg-bg-desktop bg-cover bg-no-repeat'>
            {/* Content goes here */}
        </div>
    </div>
  )
}

export default App
