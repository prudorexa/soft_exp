import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useGoogleOneTapLogin } from '@react-oauth/google';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Signin from './components/Signin';
import Footer from './components/Footer';
import ExpenseTracker from './components/Expense';



const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/expense' element={<ExpenseTracker />}/>
        <Route path='/blog' element={<Blog />}/>
        {/* <Route path='/blog/:blogId' element={<Blog />}/>  */}
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Signin' element={<Signin />}/>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App