import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' w-full bg-green-700 py-5'>
            <div className='container flex justify-between'>
                <Link to="/" className='text-white hover:text-gray-300 align-left mx-7'>SOFT_EXP</Link>
                <ul className='flex  space-x-5'>
                    <li>
                        <Link to="/about" className='text-white hover:text-gray-300'>About</Link>
                    </li>
                    <li>
                        <Link to="/Expense" className='text-white hover:text-gray-300'>Expense</Link>
                    </li>
                    <li>
                        <Link to="/Blog" className='text-white hover:text-gray-300'>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='text-white hover:text-gray-300'>Contact</Link>
                    </li>
                    <li>
                         <Link to="/signin" className='text-white hover:text-gray-300 mr-8'>Signin</Link>
                    </li>


                </ul>
            </div>

        </nav>
    )
}
export default Navbar;