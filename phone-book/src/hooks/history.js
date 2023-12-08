import { useState } from 'react'
import { getId } from '../utils/getId'

export function useHistory() {
    const [elements, setElements] = useState([])

    function addElement(command, result) {
        setElements([
            ...elements,
            {id: String(getId()), command, result}
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
