import React from "react";
const divStyle = {
  marginTop: 20,
  textAlign: "center",
  fontWeight: 500,
  color: "red",
};

function Empty({ info }) {
  return (
    <div>
      <h2 style={divStyle}>{info}</h2>
    </div>
  );
}

export default Empty;
