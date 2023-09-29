import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <h1 className='bg-teal-900 text-white font-semibold p-2 text-xl' >Redux Todo App</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
