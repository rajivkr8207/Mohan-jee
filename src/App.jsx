
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './pages/Main/Main'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
