import React from "react";

import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <User name="Sandman fn prop" />
      <UserClass name="Sandman class prop" location ="Himalayas"/>
    </div>
  );
};

export default About;
