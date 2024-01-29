import PropTypes from 'prop-types'

export function History({ historyElements, deleteHistoryElement }) {
    return (
      <div className='history'>
        <div className='title'>История запросов</div>
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
      </div>
    )
  }
  
  History.propTypes = {
    historyElements: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      command: PropTypes.string,
      result: PropTypes.string
    }))
  }
  