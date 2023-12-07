export function PhoneBook({ phoneBookArray }) {

    return (
      <>
        <h2>Наша телефонная книга</h2>
        <ol>
          {phoneBookArray.map(element => (
            <li>
              <span className='green'>{element.name + ' - номер: '}</span>
              <span className='blue'>{element.number}</span>
            </li>
          ))}
        </ol>
      </>
    )
  }