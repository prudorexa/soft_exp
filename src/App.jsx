import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useGoogleOneTapLogin } from '@react-oauth/google';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Expense from './components/Expense';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Footer from './components/Footer';
import Chart from 'chart.js/auto';



const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/expense' element={<Expense />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Signin' element={<Signin />}/>


      </Routes>
      <Footer />
    </Router>
  )
}
export default App