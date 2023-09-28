import './App.css'
import Home from './Homepage/Home'
import Login from './register/Login'
import SignUp from ''
import {BrowserRouter as  Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
    <Route>
      <Home/>
    
      {/* <Login/>
      <SignUp/> */}
      </Route>
    </>
  )
}

export default App
