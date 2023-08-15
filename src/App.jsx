import './style/App.css'
import Header from './components/Header.jsx'
import TodosLogic from './components/TodosLogic.jsx'

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>  
    </div>
  )
}

export default App
