import React from "react";

export const CardOne = ({ img, title, desc }) => {
  return (
    <div>
      <img src={img} alt="" width={100} height={100} style={{ borderRadius: "50px" }} />
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
};
