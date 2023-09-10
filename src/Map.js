import React from 'react'
import { Accordion,accordionItems } from './components/Accordian'
export default function Map() {
  return (
    <div>
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
  <h1 className="text-4xl text-white font-extrabold mb-6 mt-20 w-3/4 text-center">
    Competitive Programming Roadmap
  </h1>
  <div className="container mx-auto py-6">
    {accordionItems.map((item, index) => (
      <Accordion key={index} title={item.title} content={item.content} />
    ))}
  </div>
</div>
    </div>
  )
}
