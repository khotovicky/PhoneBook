import { useState } from 'react'
import PropTypes from 'prop-types'
import { handleCommand } from './phoneBook'

let id = 0

export function useHistory(command) {
    const [elements, setElements] = useState([])
    function addElement() {
        id += 1
        setElements([
            ...elements,
            {id: String(id), command: command, result: handleCommand(command)}
        ])
        return elements
    }
    function deleteElement(elementToDelete) {
      setElements(elements.filter(element => element.id !== elementToDelete.id))
    }

    function deleteHistory() {
      setElements([])
    }

    return {
      addElement,
      deleteElement,
      deleteHistory,
      elements
    }
}

export function History( {historyElements, deleteHistoryElement} ) {
  return (
    <ul>
      {historyElements.map(element => (
        <div style={{display: 'flex'}}> 
          <li key={element.id}>
            <span className='green'>{element.command + ': '}</span>
            <span className='blue'>{element.result}</span>
          </li>
          <button
            id={element.id}
            onClick={() => deleteHistoryElement(element)}
          >
              Delete history element
          </button>
        </div>
      ))}
    </ul>
  )
}

History.propTypes = {
  historyElements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    command: PropTypes.string,
    result: PropTypes.string
  }))
}
