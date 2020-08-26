import React, { useState } from 'react'
import { FancyInput } from '../add/styles'

const Search = ({ setSearchWord }) => {
  const [word, setWord] = useState('')
  const onFormChange = e => {
    setSearchWord(e.target.value)
    setWord(e.target.value)
  }
  return (
    <div>
      <FancyInput type="text" name="title" placeholder="Search todos" value={word} onChange={e => onFormChange(e)} />
    </div>
  )
}

export default Search
