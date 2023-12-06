export function PhoneBook({ getPhoneBook, phoneBook }) {
    return (
      <>
        <h2>Наша телефонная книга</h2>
        <ol>
          {getPhoneBook(phoneBook).map(element => (
            <li>
              <span className='green'>{element.name + ' - номер: '}</span>
              <span className='blue'>{element.number}</span>
            </li>
          ))}
        </ol>
      </>
    )
  }