import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: spaulsami@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
