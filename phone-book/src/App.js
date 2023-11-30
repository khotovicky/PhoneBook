import './App.css';
import { handleCommand } from './phoneBook'
import { useState } from 'react'


function App() {
  
  const [command, setCommand] = useState('')
  const [historyElements, setHistoryElements] = useState([])
  let nextId = 0

  const handleInput = (e) => {
    setCommand(e.target.value)
  }

  function handleClick() {
    setHistoryElements([
      ...historyElements,
      {id: nextId++, command: command, result: handleCommand(command)}
    ])
  }

  function History() {
    return (
      <ul>
        {historyElements.map(element => (
          <li key={element.id}>
            <span class='green'>{element.command + ': '}</span>
            <span class='blue'>{element.result}</span>
          </li>
        ))}
        
      </ul>
    )
  }

  return (
    <div class='App'>
      <History/>
      <input onChange={handleInput}/>
      <button onClick={handleClick}>Enter</button>
    </div>
  )
}



export default App;
