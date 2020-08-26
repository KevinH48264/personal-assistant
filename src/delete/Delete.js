import React from 'react'
import { FancyButton } from '../add/styles'

const Delete = props => (
  <div>
    <FancyButton type="button" onClick={() => props.deleteItems()}>Clear All Todos</FancyButton>
  </div>
)

export default Delete
