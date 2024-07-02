import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './components/Characters'
import Character from './components/Character'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  // TODO: Create a state to store character JSON data so we don't have to keep calling fetch
  // NOTE: This state most likely needs to be passed down to Characters.jsx and conditionally checked
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Link to="/">Main Page</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Characters />}></Route>
          <Route path="character/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
