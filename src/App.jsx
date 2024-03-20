import React from "react";

const App = () => {
  const name = "varun";
  const x = 10;
  const y = 20;
  const names = ["Brad", "Mary", "Joe", "Sara"];
  const loggedIn = true;
  const styles = {
    color:'red',
    fontSize: '55px'
  };



  return (
    <>
      <div className="text-7xl">App</div>
      <p style={styles}>hello {name}</p>
      <p className="text-7xl">
        the sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>hello member</h1> }
    </>
  );
};

export default App;
