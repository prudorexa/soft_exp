
const Contact = () => {


  return (
    <div>
       <h1 className="text-3xl font-bold align-centre text-red-500 mt=4 mb-7 mx-40 bg=blue-500">
      CONTACT US!
    </h1>
      <form action="https://formspree.io/f/xrgnrake" method="POST">
        <div className="mb-4 mx-9">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Full Name</label>
          <input placeholder="Full Name..." className="w-full px-7 py-2 border rounded-lg bg-white-450 focus:border-blue-800" required type="name" />
        </div>
        <div className="mb-4 mx-9 ">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor=""> Email</label>
          <input placeholder="Your Email..." className="w-full px-3 py-2 border rounded-lg bg-white-450 focus:border-blue-500" required type="email" />
        </div>
        <div className="mb-4 mx-9 ">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Message</label>
          <textarea rows='4' placeholder="Type your message..." className="w-full px-3 py-2 border rounded-lg bg-white-450 focus:border-blue-500" required type="text" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-green-500 text-white-500 font-semibold px-4 py-2 rounded-lg hover:bg-green-500 focus:outline-white">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Contact;



