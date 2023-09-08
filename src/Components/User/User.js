import React, { useState } from "react";

const User = (props) => {
  const { name, email, picture, website, phone } = props.user;
  const fullName = name.first + " " + name.last;
  const [mobile, setMobile] = useState("");
  const showPhoneNumber = () => setMobile(phone);
 const addMember = props.addMember;
  const UserStyle = {
    border: "2px solid red",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    width: "40%",
  };
  return (
    <div style={UserStyle}>
      <div style={{ marginTop: "20px" }}>
        <img src={picture.large} alt="" />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h1>Name :{fullName} </h1>
        <p>Email : {email}</p>
        <p>
          <a href={website} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </p>
        <p>Phone : {mobile}</p>
        <button onClick={showPhoneNumber}>Show Phone Number</button>
        <button onClick={()=>addMember(fullName)}>Add Me</button>
      </div>
    </div>
  );
};

export default User;
