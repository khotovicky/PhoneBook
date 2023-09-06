function createPhoneBook() {
    const phoneBook = initialList = {}

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
        phoneBook[name] = number
        return 'Имя добавлено'
    }
    
    function deleteNumber(name) {
        if (!name) {
            return 'invalid'
        }
        if (!phoneBook[name]) {
            return 'Этого имени нет'
        }
        delete phoneBook[name]
        return "Имя удалено"
    }
    return {
        getNumber,
        setNumber,
        deleteNumber
    }
}

const phoneBook = createPhoneBook()

function perfomCommand(command) {
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

 while (true) {
     const a = prompt("Введите команду") // get Jura // set Vitya 8327489327498 // delete Kostja // exit 
    if (a === 'exit') {
        break
    }
    alert(perfomCommand(a))
}
