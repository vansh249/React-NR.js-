import React from "react";

//function component
export const User = ({ name, location, email }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h3>Contact : {email}</h3>
    </div>
  );
};

//class component
export class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, email } = this.props;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : {email}</h3>
      </div>
    );
  }
}
