import React from "react";

export default function Card(props) {
  return (
    <div className="max-w-xs mx-auto bg-gray-900 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg h-96">
      <div
        className="w-full h-64 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${props.imageSrc})` }}
      ></div>
      <div className="p-2 text-white text-center text-width font-extrabold">
        <h3 className="text-lg font-semibold ">{props.name}</h3>
        <p className="text-gray-400 ">{props.designation}</p>
        <a
          href={props.href}
          className="mt-2 block text-blue-400 hover:underline"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}