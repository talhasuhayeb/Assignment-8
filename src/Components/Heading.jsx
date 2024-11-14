import React from "react";

// eslint-disable-next-line react/prop-types
const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="container mx-auto text-center my-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-xl font-semibold">{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
