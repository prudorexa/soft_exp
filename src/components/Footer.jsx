import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailAddress) {
      alert('Please enter your email');
      return;
    }
    console.log('Subscribing with email address:', emailAddress);

    setEmailAddress('');
    setError('');
alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-green-800 text-white p-4">
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4'>
        <div className="md:w-2/5">
          <h1 className='text-3xl md:text-4xl md:mb-2 lg:leading-normal font-semibold'>
            <span className='text-teal-400'>Free</span> Welcome to Soft-exp
          </h1>
          <p className="text-gray-300 mb-4">Keep track of your expenses effortlessly with Soft-exp. Stay organized and manage your finances with ease.</p>
          <form onSubmit={handleSubscribe}>

          <div className="flex items-center mb-4">
            <input 
              type="email" 
              id='email'
              name='email'
              placeholder='Enter Your email' 
              className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none' 
              value={emailAddress} 
              onChange={(e) => setEmailAddress(e.target.value)} 
            />
            <button 
              type='submit'
              className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[popins] rounded-md text-white md:w-auto w-full'
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>} 
          </form>
        </div>
        <div className="md:w-3/5">
          <ul className="md:flex md:justify-end space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="text-white-300 hover:text-white-100">Contact Us</a>
              <p className="text-sm text-gray-500 mt-1">Have questions or feedback? Reach out to us!</p>
            </li>
            <li>
              <a href="#" className="text-white-300 hover:text-white-100">Privacy Policy</a>
              <p className="text-sm text-gray-500 mt-1">Read our privacy policy to understand how we handle your data.</p>
            </li>
            <li>
              <a href="#" className="text-white-300 hover:text-white-100">Terms of Service</a>
              <p className="text-sm text-gray-500 mt-1">Learn about the terms governing your use of our service.</p>
            </li>
            <li>
              <a href="#" className="text-white-300 hover:text-white-100">About Us</a>
              <p className="text-sm text-gray-500 mt-1">Find out more about our company and mission.</p>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">Follow us on social media:</p>
          <div className="flex mt-1">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
