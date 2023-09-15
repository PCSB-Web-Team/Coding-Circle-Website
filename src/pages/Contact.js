
import React from "react";
import Card from "../components/Cards";
import img1 from "../assets/images/Tanisha.jpg";
import img2 from "../assets/images/Rishikesh.jpeg";
import img3 from "../assets/images/Shivam.jpg";
import img4 from "../assets/images/Vaishnavi.jpeg";

const Contact = () => {
  const cardData = [
    {
      imageSrc: img1,
      name: "Tanisha Pareek",
      designation: "Director",
      href: "https://www.linkedin.com/in/tanishapareek/",
    },
    {
      imageSrc: img2,
      name: "Rishikesh Suryawanshi",
      designation: "Secretary",
      href: "https://www.linkedin.com/in/rishikeshsuryavanshi/",
    },
    {
      imageSrc: img3,
      name: "Shivam Dhonde",
      designation: "Coordinator",
      href: "https://www.linkedin.com/in/vaishnavi-raut-4a0228224/",
    },
    {
      imageSrc: img4,
      name: "Vaihnavi Raut",
      designation: "Coordinator",
      href: "https://www.linkedin.com/in/shivamd27/",
    },
  ];

  return (
    <div className="flex flex-wrap overflow-x-hidden bg-gray-800">
      {cardData.map((card, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2">
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default Contact;
