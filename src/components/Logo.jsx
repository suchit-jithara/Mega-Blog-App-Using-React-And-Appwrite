import React from "react";

function Logo({ width = "100px", height = "41px" }) {
  return (
    <div
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEQK21MP5-z5-xf2mozKJW6AJDmc1KImvXg&usqp=CAU')`,
        width: width,
        height: height,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Logo;
