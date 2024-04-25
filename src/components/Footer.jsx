import React, { useState } from 'react';

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubscribe = () => {
    if (!emailAddress) {
      alert('Please enter your email');
      return;
    }
    console.log('Subscribing with email address:', emailAddress);

    setEmailAddress('');
  };

  return (
    <footer className="bg-green-800 text-white p-4">
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4'>
        <div className="md:w-2/5">
          <h1 className='text-3xl md:text-4xl md:mb-2 lg:leading-normal font-semibold'>
            <span className='text-teal-400'>Free</span> Welcome to Soft-exp
          </h1>
          <p className="text-gray-300 mb-4">Keep track of your expenses effortlessly with Soft-exp. Stay organized and manage your finances with ease.</p>
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              placeholder='Enter Your email' 
              className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none' 
              value={emailAddress} 
              onChange={(e) => setEmailAddress(e.target.value)} 
            />
            <button 
              className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[popins] rounded-md text-white md:w-auto w-full'
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="md:w-3/5">
          <ul className="md:flex md:justify-end space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">Contact Us</a>
              <p className="text-sm text-gray-500 mt-1">Have questions or feedback? Reach out to us!</p>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
              <p className="text-sm text-gray-500 mt-1">Read our privacy policy to understand how we handle your data.</p>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">Terms of Service</a>
              <p className="text-sm text-gray-500 mt-1">Learn about the terms governing your use of our service.</p>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">About Us</a>
              <p className="text-sm text-gray-500 mt-1">Find out more about our company and mission.</p>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">Follow us on social media:</p>
          <div className="flex mt-1">
            <a href="#" className="text-gray-300 hover:text-gray-100 mr-3">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100 mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100 mr-3">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
