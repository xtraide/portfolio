import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/public/utiles/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <main>
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
      </main>
    </>
  )
}

export default App
