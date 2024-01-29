import './css/App.css'
import { useState } from 'react'
import { Input } from './components/Input.js'
import { useHistory } from './hooks/history'
import { History } from './components/History'
import { handleCommand, usePhoneBook } from './hooks/phoneBook'
import { transformPhoneBookObjectToArray } from "./utils/tranformObjectToArray"
import { PhoneBook } from './components/PhoneBook'

export function App() {
    const [command, setCommand] = useState('')
    const phoneBook = usePhoneBook()
    const history = useHistory()
    const perfomCommand = () => {
      const response = handleCommand(command, phoneBook)
      history.addElement(command, response)
    }
    const phoneBookArray = transformPhoneBookObjectToArray(phoneBook.phoneBook)

    return (
    <div class='App'>
      <History
        historyElements={history.elements}
        deleteHistoryElement={history.deleteElement}
      />
      <div className='inputPhoneBook'>
        <Input
          value={command}
          setValue={setCommand}
        />
        <button onClick={perfomCommand}>Enter</button>
        {history.elements.length > 0 && <button onClick={history.deleteHistory}>Delete history</button>}
        <PhoneBook
          phoneBookArray={phoneBookArray}
        />
      </div>
    </div>
  )
}

export default App
