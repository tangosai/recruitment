import React from "react";

export default function Heading({ title }) {
  return (
    <h1 className="text-xl mt-5 mb-5 sm:text-3xl lg:text-5xl lg:mt-10 lg:mb-16  font-semibold">
      {title}
    </h1>
  );
}
