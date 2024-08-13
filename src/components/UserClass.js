import React from "react";

class UserClass extends React.Component {

constructor(props){
    super(props);
    this.state = {  
        count : 110,
        count2: 233,
       
    }
    console.log("child constructor")
}

componentDidMount(){
    console.log( this.props.name + "Component did mount in child");

    // api call here
}

  render() {
const {name, location} = this.props;
const{count} = this.state;
    console.log("child render")
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : sandman@king</h4>
        <h2>Count : {count}</h2>
        <h3>Count  2 : {this.state.count2}</h3>
        <button onClick={()=>{
            // never update state variables directly
            // this.state.count = this.state.count + 1;

            this.setState({
                count : this.state.count + 200,
                count2: this.state.count2 + 1,
            })
        }}>Increase Count</button>
      </div>
    );
  }
}
export default UserClass;
