import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <UserContext.Consumer>
          {({ userName }) => <h3>Name: {userName}</h3>}
        </UserContext.Consumer>
        <h3>Location: {location}</h3>
        <h3>Contact: spaulsami@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
