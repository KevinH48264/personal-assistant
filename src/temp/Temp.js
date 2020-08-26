import React from 'react'
import { usersLib } from '../APIBuilder/static/scripts/library/users'

const Temp = () => (
  <div>
    <p>Hi</p>
    <button type="button" onClick={() => usersLib.create('someEmailId', 'tempName')}>Click Me Temp</button>
    <img src="/logo192.png" alt="something" />
  </div>

)

export default Temp
