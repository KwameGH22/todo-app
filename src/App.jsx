import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
// import Card from './components/Card'
import { AppContext } from './context/AppContextProvider'
import TaskFilter from './components/TaskFilter'
import TaskStats from './components/TaskStats'


function App() {
  const {darkTheme, keepFiltering} = useContext(AppContext);

  return (
    <div className={`min-h-screen pb-20 ${
      darkTheme
        ? 'bg-gradient-to-r from-[#9947D7] via-[#8B83F8] to-[#76A2F9]'
        : 'bg-[#F2F2F2]'
    }`}>
        <div className='w-full h-52 m-auto bg-bg-desktop bg-cover bg-no-repeat'>
            {/* Content goes here */}
            <Header/>
            <Form/>
            <TaskFilter/>
            {keepFiltering()}
            <TaskStats/>
        </div>
    </div>
  )
}

export default App
