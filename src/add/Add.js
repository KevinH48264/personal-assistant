import React, { useState } from 'react'
import nanoid from 'nanoid'
import { FancyButton, FancyInput } from './styles'


const Add = ({ allTodos, setAllTodos }) => {
  const [item, setItem] = useState('')
  const onButtonClick = () => {
    setAllTodos([...allTodos, { item, id: nanoid() }])
    setItem('')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <div>
        <FancyInput type="text" placeholder="My todo" value={item} onChange={e => setItem(e.target.value)} />
      </div>
      <div>
        <FancyButton type="button" onClick={() => onButtonClick()}>Add Todo</FancyButton>
      </div>
    </div>
  )
}

export default Add
