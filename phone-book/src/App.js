import './App.css';
import { useState } from 'react'
import { Input } from './command.js';
import { useHistory, History } from './History'
import { PhoneBook } from './phoneBook';

export function App() {
    const [command, setCommand] = useState('')
    const history = useHistory(command)

    return (
    <div class='App'>
      <History
        historyElements={history.elements}
        deleteHistoryElement={history.deleteElement}
      />
      <Input
        value={command}
        setValue={setCommand}
      />
      <button onClick={history.addElement}>Enter</button>
      <button onClick={history.deleteHistory}>Delete history</button>
      <PhoneBook />
    </div>
  )
}

export default App
