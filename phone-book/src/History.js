import { useState } from 'react'
import { getId } from './utils/getId'
import { handleCommand } from './phoneBook'

export function useHistory(command, phoneBook) {
    const [elements, setElements] = useState([])
    function addElement() {
        
        setElements([
            ...elements,
            {id: String(getId()), command: command, result: handleCommand(command, phoneBook)}
        ])
        return elements
    }
    function deleteElement(elementToDelete) {
      setElements(elements => elements.filter(element => element.id !== elementToDelete.id))
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
