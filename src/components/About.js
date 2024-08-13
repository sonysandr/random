import React from "react";

import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor About")
  }

  componentDidMount(){
    console.log("Parent componentdidmount")
  }
  render() {
    console.log("render About")
    return (
      <div>
        <h1>About us</h1>
        {/* <User name="Sandman fn prop" /> */}
        <UserClass name="Sandman1 class prop " location="Himalayas" />
        
      </div>
    );
  }
}

export default About;
