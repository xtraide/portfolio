import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/public/utiles/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>

      <Header></Header>

      <Outlet></Outlet>

    </>
  )
}

export default App
