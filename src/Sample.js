import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
  {
    title: "Step 1 : Learn a Programming Language",
    content: (
      <>
        <p className="text-lg  mb-2">
          • Choose a language: <span className="text-purple-600">C++</span>/
          <span className="text-blue-600">Python</span>/
          <span className="text-cyan-600">Java</span>
        </p>
        <p className="  text-lg  mb-2">
          • Learn basic I/O syntax, inbuilt functions (
          <span className="text-blue-600">STL</span>,{" "}
          <span className="text-cyan-600">JCF</span>, etc.)
        </p>
        <p className="  text-lg  mb-2">
          • Understand conditional handling, looping, functions
        </p>
        <p className="  text-lg  mb-2">
          • Attend <span className="text-purple-600">SIG</span> sessions for
          structured learning
        </p>
      </>
    ),
  },
  {
    title: "Step 2: Practice Questions Simultaneously",
    content: (
      <>
        <p className="  text-lg    mb-2">
          • Use{" "}
          <a
            href="https://www.hackerrank.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerRank
          </a>{" "}
          for practice
        </p>
        <p className="  text-lg    mb-2">
          • Practice questions while learning language concepts
        </p>
      </>
    ),
  },
  {
    title: "Step 3: Create Accounts on Coding Platforms",
    content: (
      <>
        <p className="  text-lg    mb-2">
          •{" "}
          <a
            href="https://www.codechef.com/signup"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeChef
          </a>
          : Practice, select difficulty, solve problems
        </p>
        <p className="  text-lg    mb-2">
          •{" "}
          <a
            href="https://www.codeforces.com/signup"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeForces
          </a>
          : Solve problems in specified difficulty range
        </p>
      </>
    ),
  },
  {
    title: "Step 4: Problem Solving Approach",
    content: (
      <>
        <p className="  text-lg    mb-2">
          • Spend 30 mins thinking about the problem
        </p>
        <p className="  text-lg    mb-2">
          • If you have an idea, plan data structures and time complexity
        </p>
        <p className="  text-lg    mb-2">• Code the solution in 2-3 mins</p>
        <p className="  text-lg    mb-2">
          • If no idea, watch a YouTube video for hints
        </p>
        <p className="  text-lg    mb-2">
          • Try thinking of a solution using hints
        </p>
        <p className="  text-lg    mb-2">
          • Code the solution if an idea is generated, else watch the full video
        </p>
        <p className="  text-lg    mb-2">
          • Understand the concept, solve independently after 15 days
        </p>
      </>
    ),
  },
  {
    title: "Step 5: Topics to Learn - Set 1 (Absolute Beginners)",
    content: (
      <>
        <p className="  text-lg    mb-2">
          • Number Theory: GCD, LCM, Primality Testing
        </p>
        <p className="  text-lg    mb-2">
          • Searching and Sorting: Binary Search, Prefix Sums
        </p>
        <p className="  text-lg    mb-2">
          • Inbuilt Function Library: STL (Map, Set, Vectors, etc.)
        </p>
        <p className="  text-lg    mb-2">• Two Pointers</p>
        <p className="  text-lg    mb-2">• Basic Bitwise Operations</p>
      </>
    ),
  },
  {
    title: "Step 6: Topics to Learn - Set 2",
    content: (
      <>
        <p className="  text-lg    mb-2">• Recursion</p>
        <p className="  text-lg    mb-2 ">
          • Number Theory: Sieve of Eratosthenes, Modular Arithmetic
        </p>
        <p className="  text-lg    mb-2 ">• Binary Search on Answers</p>
        <p className="  text-lg    mb-2">• Sliding Window</p>
        <p className="  text-lg    mb-2">• Greedy Algorithms</p>
      </>
    ),
  },
  {
    title: "Step 7: Topics to Learn - Set 3 (Intermediate)",
    content: (
      <>
        <p className="  text-lg    mb-2">
          • Number Theory: Euler’s and Fermat’s Theorem
        </p>
        <p className="  text-lg    mb-2">• Dynamic Programming (Basic)</p>
        <p className="  text-lg    mb-2">
          • Trees and Graphs: Properties, Traversal, Diameter
        </p>
        <p className="  text-lg    mb-2">
          • Graph Algorithms: BFS, DFS, Bipartite Graphs
        </p>
      </>
    ),
  },
  {
    title: "Step 8: Topics to Learn - Set 4 (Advanced)",
    content: (
      <>
        <p className="  text-lg    mb-2">
          • Dynamic Programming (Intermediate + Advanced)
        </p>
        <p className="  text-lg    mb-2">
          • Range Queries: Segment Trees, Fenwick Trees
        </p>
        <p className="  text-lg    mb-2">
          • Trees and Graphs: Binary Lifting, DP on Trees, Algorithms
        </p>
        <p className="  text-lg    mb-2">• Tries</p>
        <p className="  text-lg    mb-2">• Game Theory</p>
      </>
    ),
  },
];

function Sample() {
  return (
    <div className="bg-gray-800 min-h-screen py-8">
      <h1 class="text-4xl font-extrabold text-center mb-8 text-white">
        Competitive Programming Roadmap
      </h1>

      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.title}
            contentStyle={{
              backgroundColor: "rgb(31, 41, 55)",
              boxShadow: "0 0 15px rgba(0, 255, 255, 1)",
            }}
            contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
            iconStyle={{ display: "none" }}
          >
            <h3 className="text-xl font-extrabold text-white">
              {element.title}
            </h3>
            <div className="mt-2 text-white">{element.content}</div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Sample;
