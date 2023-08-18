import React from "react";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Computer Department
        </h1>
        <hr className="border-t border-gray-100 mb-10 mx-auto w-1/2" />
        <VerticalTimeline>
          {timelineElements.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              className="vertical-timeline-element neon-effect"
              contentStyle={{
                background: "#EDFDF4",
                boxShadow:
                  "0 0 15px rgba(56, 161, 105, 0.4), 0 0 40px rgba(56, 161, 105, 0.4), 0 0 80px rgba(56, 161, 105, 0.4)",
                borderRadius: "12px",
                padding: "24px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid gray-900",
              }}
              date={element.date}
              iconStyle={{
                background: "#38a169",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={
                <div className="w-10 h-10 flex rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              }
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {element.title}
              </h3>
              <p className="text-black-300">{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Roadmap;
