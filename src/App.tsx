import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/public/utiles/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <main className='container-fluid'>
        <Header></Header>

        <Outlet></Outlet>

      </main>

    </>
  )
}

export default App
