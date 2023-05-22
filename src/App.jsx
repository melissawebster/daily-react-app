import { useState } from 'react'
import Task from './components/task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const name = prompt('Task name: ')
    const newTask = {
      id: Math.floor(1000 * Math.random() + 1), /*generates random id number*/
      name,
      done: false
    }
    setTasks((currentState) => [...currentState, newTask])
  }

  const removeTask = (taskId) => {
    setTasks(currentState => (
      currentState.filter(task => task.id !== taskId)
    ))
  }

  return (
    <body>
      <main>
        <div className="header">
        <h1>Daily Planner</h1>
        </div>
        

        <div className="list">
          <h2>Tasks for today:</h2>
          <ul>
          {/*use map instead of if else, etc*/}
            {tasks.map(task => 
            <Task
              key={task.id}
              task={task}
              /*toggleDone={toggleDone}*/
              removeTask={removeTask}
            /> 
          )}
            
          </ul>
          
          <button onClick={addTask}>Add</button>
        </div>
      </main> 
    </body>
    
  )
}

export default App
