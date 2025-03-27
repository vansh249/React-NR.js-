import React from "react";

//function component
export const User = ({ name, location, email }) => {
  return (
    <div className="user-card m-4 p-4 rounded-lg bg-[rgba(239,236,229,255)]">
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
      <div className="user-card m-4 p-4 rounded-lg bg-[rgba(239,236,229,255)]">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : {email}</h3>
      </div>
    );
  }
}
