const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4 background img:https://media.istockphoto.com/id/1421629295/photo/inflated-balloon-dollar-sign.jpg?s=1024x1024&w=is&k=20&c=CmkExBo2BWsAhr6ENH1P1TkOyekysQ6z5PIcQpD-Fvs=">
      <div className="col-span-1">
        <h1 className="text-3xl font-bold text-centre text-blue-500 mt=4 mt-5 mx-20 bg=blue-500 border border-gray-300 rounded=1g bg-gray-100">
          Welcome to my soft_exp!
        </h1>
        <p className="mt-5 mx-7 mb-10">
          <img src="src/assets/expense.jpg" alt=" width-100%" />
        </p>
      </div>
      <div className="col-span-1">
        <h2 className="text-3xl font-bold text-centre text-blue-500 mt=4 mt-5 mx-20 bg=blue-500">
          Expense tracker Project
        </h2>
        <p>
          The Expense Tracker project is a web application developed using React.
          Its main purpose is to assist users in keeping track of their expenses.
          With this app, users can easily add,
          and delete expenses to view a summary of their spending habits as well and it will show the available balance the user has left.
        </p>
        <p className="mt-5 mx-7 mb-10">
          <img src="src/assets/istockphoto-1806905453-1024x1024.jpg" alt=" width-100%" />
        </p>
      </div>
    </div>
  );
};

export default Home;