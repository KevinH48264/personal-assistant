// import React, { useState } from 'react'
// import {
//   Switch,
//   Route,
// } from 'react-router-dom'
// import Add from './add/Add'
// import Todos from './todos/Todos'
// import Search from './search/Search'
// import NavBar from './components3/navBar'
// import Delete from './delete/Delete'
// import Home from './home/home'
// import Temp from './temp/Temp'
// import './styles.css'

// const App = () => {
//   const [todos, setTodos] = useState([])
//   const [searchWord, setSearchWord] = useState([])

//   const deleteAll = () => {
//     setTodos([])
//   }
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path="/todos">
//           <div className="container">
//             <div>
//               <Add allTodos={todos} setAllTodos={setTodos} />
//             </div>
//             <div className="row">
//               <Search setSearchWord={setSearchWord} />
//               <Delete deleteItems={deleteAll} />
//             </div>
//             <div className="label">
//                 Your Todos:
//             </div>
//             <ul>
//               {todos.filter(todoFilter => todoFilter.item.includes(searchWord)).map(todo => (<Todos allTodos={todos} setAllTodos={setTodos} item={todo.item} data={todo.id} />))}
//             </ul>
//           </div>
//         </Route>
//         <Route path="/">
//           <p>
// My Token =
//             {' '}
//             {window.token}
//           </p>
//           <Home />
//           <Temp />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomePage from './containers/Home'
import ContactPage from './containers/Contact'
import PressPage from './containers/Press'
import VenturesPage from './containers/Ventures'
import Navbar from './components/Navbar'
import './App.css'

// "homepage": "https://KevinH48264.github.io/satvik-personal-website",

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/ventures" component={VenturesPage} />
              <Route path="/press" component={PressPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
      />
    </div>
  </Router>
)

export default App
