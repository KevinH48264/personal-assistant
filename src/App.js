import React, { useState } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Add from './add/Add'
import Todos from './todos/Todos'
import Search from './search/Search'
import NavBar from './components/navBar'
import Delete from './delete/Delete'
import Home from './home/home'
import Temp from './temp/Temp'
import './styles.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [searchWord, setSearchWord] = useState([])

  const deleteAll = () => {
    setTodos([])
  }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/todos">
          <div className="container">
            <div>
              <Add allTodos={todos} setAllTodos={setTodos} />
            </div>
            <div className="row">
              <Search setSearchWord={setSearchWord} />
              <Delete deleteItems={deleteAll} />
            </div>
            <div className="label">
                Your Todos:
            </div>
            <ul>
              {todos.filter(todoFilter => todoFilter.item.includes(searchWord)).map(todo => (<Todos allTodos={todos} setAllTodos={setTodos} item={todo.item} data={todo.id} />))}
            </ul>
          </div>
        </Route>
        <Route path="/">
          <p>
My Token =
            {' '}
            {window.token}
          </p>
          <Home />
          <Temp />
        </Route>
      </Switch>
    </div>
  )
}

export default App
