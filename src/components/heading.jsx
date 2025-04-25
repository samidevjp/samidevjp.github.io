import React from "react";

const Heading = ({ titleEn, titleJp }) => (
  <div className="p_pg-head">
    <h1 className="main">{titleEn}</h1>
    <p className="sub">{titleJp}</p>
  </div>
);

export default Heading;
