import React from "react";

export default function Item({ Icon, title }) {
  return (
    <div className="p-3 md:p-5 border cursor-pointer">
      <Icon className="text-3xl md:text-4xl mb-2" />
      <h1 className="text-sm sm:text-xl">{title} </h1>
    </div>
  );
}
