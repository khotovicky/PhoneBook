import './App.css';
import { useState } from 'react'
import { Input } from './Input.js'
import { useHistory } from './History'
import { History } from './components/History'
import { usePhoneBook } from './phoneBook';
import { getPhoneBook } from './phoneBook'
import { PhoneBook } from './components/PhoneBook'


export function App() {
    const [command, setCommand] = useState('')
    const phoneBook = usePhoneBook()
    const history = useHistory(command, phoneBook)

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
      <PhoneBook
        getPhoneBook={getPhoneBook}
        phoneBook={phoneBook}
      />
    </div>
  )
}

export default App
