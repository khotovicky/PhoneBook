function createPhoneBook(initialList = {}) {
    const phoneBook = initialList

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
        deleteNumber,
        phoneBook
    }
}

const phoneBook = createPhoneBook()

export function handleCommand(command) {
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

function getPhoneBook() {
    const nowPhoneBook = []
    for (const name in phoneBook.phoneBook) {
        nowPhoneBook.push({name: name, number: phoneBook.phoneBook[name]})
    }
    return nowPhoneBook
}

export function PhoneBook() {
    return (
      <>
        <h2>Наша телефонная книга</h2>
        <ol>
          {getPhoneBook().map(element => (
            <li>
              <span className='green'>{element.name + ' - номер: '}</span>
              <span className='blue'>{element.number}</span>
            </li>
          ))}
        </ol>
      </>
    )
  }
  