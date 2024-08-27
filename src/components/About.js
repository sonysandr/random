import React from "react";

import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor About")
  }

  componentDidMount() {
    // console.log("Parent componentdidmount")
  }
  render() {
    // console.log("render About")
    return (
      <div>
        <h1>About us</h1>
        {/* <User name="Sandman fn prop" /> */}
        <UserClass name="Sandman1 class prop " location="Himalayas" />
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              console.log(loggedInUser);
              return (
                <>
                  <h1 className="text-xl font-bold">
                    <span className="text-lg font-normal">
                      LoggedIn User :{" "}
                    </span>{" "}
                    {loggedInUser}
                  </h1>
                </>
              );
            }}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
