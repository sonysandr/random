import { useState } from "react";

const User = ({ name }) => {
    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(10001);
  return (
    <div className="user-card">
        
      <h2>Name : {name}</h2>
      <h3>Location : Global</h3>
      <h4>Contact : sandman@king</h4>
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
    </div>
  );
};

export default User;
