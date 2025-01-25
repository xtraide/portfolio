import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/public/utiles/Header'
import Footer from './components/public/utiles/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <main>
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
