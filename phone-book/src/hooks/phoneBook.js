import { useState } from "react"
import { excludeObjectElement } from "../utils/deleteObjectElement"

export function usePhoneBook() {
    const [phoneBook, setPhoneBook] = useState({}) 

    function getNumber(name) {
        if (!name) {
            return 'invalid'
        }
        if (!phoneBook[name]) {
            return 'Этого имени нет'
        }
        return phoneBook[name]
    }
    
    function setNumber(name, number) {
        if (!name || !number) {
            return 'invalid'
        }
        setPhoneBook({
            ...phoneBook,
            [name]: number
        })
        if (phoneBook[name] === number) {
            return 'Такой номер уже есть'
        }
        if (phoneBook[name] !== undefined) {
            return 'Номер изменен'
        }
        return 'Имя добавлено'
    }
    
    function deleteNumber(name) {
        if (!name) {
            return 'invalid'
        }
        if (!phoneBook[name]) {
            return 'Этого имени нет'
        }
        setPhoneBook(excludeObjectElement(phoneBook, name))
        return "Имя удалено"
    }
    return {
        getNumber,
        setNumber,
        deleteNumber,
        phoneBook
    }
}

export function handleCommand(command, phoneBook) {
    if (command === null) {
        return "Invalid"
    }
    const tokens = command.split(" ")
    const op = tokens[0]
    if (op === 'get') {
        return phoneBook.getNumber(tokens[1]) 
    } else if (op === 'set') {
        return phoneBook.setNumber(tokens[1], tokens[2])
    } else if (op === 'delete'){
        return phoneBook.deleteNumber(tokens[1])
    } else {
        return "Invalid"
    }
}
