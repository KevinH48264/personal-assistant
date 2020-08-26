import React from 'react'
import { usersLib } from '../APIBuilder/static/scripts/library/users'

const Temp = () => (
  <div>
    <p>Hi</p>
    <button type="button" onClick={() => usersLib.create('someEmailId', 'tempName')}>Click Me Temp</button>
    <img alt="google image" src="/logo192.png" />
  </div>

)

export default Temp
