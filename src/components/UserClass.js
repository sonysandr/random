import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        public_repos: "default",
      },
    };

    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log( this.props.name + "Component did mount in child");
    // api call here
    const data = await fetch("https://api.github.com/users/sonysandr");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    // console.log("Com did update is called")
  }
  componentWillUnmount(){
    // console.log("comp will unmount")
  }
  render() {
    // const { name, location } = this.props;
    const{login,public_repos} = this.state.userInfo;
    // console.log("child render");
    return (
      <div className="user-card">
        <h2>Name : {login}</h2>
        <h3>Public repos : {public_repos}</h3>
        <h4>Contact : sandman@king</h4>
      </div>
    );
  }
}
export default UserClass;
