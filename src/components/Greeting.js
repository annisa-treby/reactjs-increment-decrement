import React from "react";

function Greeting(props) {
  const { user, message } = props;
  return (
    <div>
      <header>
        <h1>Welcome {user.name} to react</h1>
        <h3>{message}</h3>
      </header>
    </div>
  );
}
export default Greeting;
