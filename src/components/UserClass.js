import React from "react";

class UserClass extends React.Component {

constructor(props){
    super(props);
    this.state = {
        count : 110,
        count2: 1000,
    }
}

  render() {
const {name, location} = this.props;
const {count,count2} = this.state;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : sandman@king</h4>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
      </div>
    );
  }
}
export default UserClass;
