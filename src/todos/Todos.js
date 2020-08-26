import React from 'react'
import { DeleteButton } from '../add/styles'

const Todos = ({
  allTodos, setAllTodos, item, data,
}) => {
  const onButtonClick = () => {
    console.log('Key: ', data)
    allTodos.map(temp => console.log(temp))
    setAllTodos(
      allTodos.filter(temp => !(temp.id === data)),
    )
  }

  return (
    <div>
      <li key={data} style={{ margin: '10px' }}>
        <DeleteButton
          type="button"
          onClick={() => onButtonClick()}
        >
          X
        </DeleteButton>
        {item}
      </li>
    </div>
  )
}

export default Todos
