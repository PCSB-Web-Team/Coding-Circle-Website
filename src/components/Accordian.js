import React, { useState } from 'react';

const accordionItems = [
  {
    title: 'Step 1 : Learn a Programming Language',
    content: (
      <>
        <p className="text-lg text-gray-700 mb-2">
          • Choose a language: <span className="text-purple-600">C++</span>/<span className="text-blue-600">Python</span>/<span className="text-green-600">Java</span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          • Learn basic I/O syntax, inbuilt functions (<span className="text-blue-600">STL</span>, <span className="text-green-600">JCF</span>, etc.)
        </p>
        <p className="text-lg text-gray-700 mb-2">
          • Understand conditional handling, looping, functions
        </p>
        <p className="text-lg text-gray-700 mb-2">
          • Attend <span className="text-purple-600">SIG</span> sessions for structured learning
        </p>
      </>
    ),
  },
  {
    title: 'Step 2: Practice Questions Simultaneously',
    content: (
      <>
      <p className="text-lg text-gray-700 mb-2">• Use <a href="https://www.hackerrank.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HackerRank</a> for practice</p>
<p className="text-lg text-gray-700 mb-2">• Practice questions while learning language concepts</p>
      </>
      
    )
  },
  {
    title: 'Step 3: Create Accounts on Coding Platforms',
    content: <>
    <p className="text-lg text-gray-700 mb-2">
  • <a href="https://www.codechef.com/signup" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CodeChef</a>: Practice, select difficulty, solve problems
</p>
<p className="text-lg text-gray-700 mb-2">
  • <a href="https://www.codeforces.com/signup" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CodeForces</a>: Solve problems in specified difficulty range
</p>
    </>
  },
  {
    title: 'Step 4: Problem Solving Approach',
    content: 
    <>
    <p className="text-lg text-gray-700 mb-2">
  • Spend 30 mins thinking about the problem
</p>
<p className="text-lg text-gray-700 mb-2">
  • If you have an idea, plan data structures and time complexity
</p>
<p className="text-lg text-gray-700 mb-2">
  • Code the solution in 2-3 mins
</p>
<p className="text-lg text-gray-700 mb-2">
  • If no idea, watch a YouTube video for hints
</p>
<p className="text-lg text-gray-700 mb-2">
  • Try thinking of a solution using hints
</p>
<p className="text-lg text-gray-700 mb-2">
  • Code the solution if an idea is generated, else watch the full video
</p>
<p className="text-lg text-gray-700 mb-2">
  • Understand the concept, solve independently after 15 days
</p>
    </>
  },
  {
    title: 'Step 5: Topics to Learn - Set 1 (Absolute Beginners)',
    content: 
    <>
     <p className="text-lg text-gray-700 mb-2">• Number Theory: GCD, LCM, Primality Testing</p>
<p className="text-lg text-gray-700 mb-2">• Searching and Sorting: Binary Search, Prefix Sums</p>
<p className="text-lg text-gray-700 mb-2">• Inbuilt Function Library: STL (Map, Set, Vectors, etc.)</p>
<p className="text-lg text-gray-700 mb-2">• Two Pointers</p>
<p className="text-lg text-gray-700 mb-2">• Basic Bitwise Operations</p>
    </>
  },
  {
    title: 'Step 6: Topics to Learn - Set 2',
    content: (
      <>
        <h2 className="text-lg font-semibold mb-2">Topics to Learn - Set 2</h2>
        <p>• Recursion</p>
        <p>• Number Theory: Sieve of Eratosthenes, Modular Arithmetic</p>
        <p>• Binary Search on Answers</p>
        <p>• Sliding Window</p>
        <p>• Greedy Algorithms</p>
      </>
    ),
  },
  {
    title: 'Step 7: Topics to Learn - Set 3 (Intermediate)',
    content: (
      <>
        <p>• Number Theory: Euler’s and Fermat’s Theorem</p>
        <p>• Dynamic Programming (Basic)</p>
        <p>• Trees and Graphs: Properties, Traversal, Diameter</p>
        <p>• Graph Algorithms: BFS, DFS, Bipartite Graphs</p>
      </>
    ),
  },
  {
    title: 'Step 8: Topics to Learn - Set 4 (Advanced)',
    content: (
      <>
        <p>• Dynamic Programming (Intermediate + Advanced)</p>
        <p>• Range Queries: Segment Trees, Fenwick Trees</p>
        <p>• Trees and Graphs: Binary Lifting, DP on Trees, Algorithms</p>
        <p>• Tries</p>
        <p>• Game Theory</p>
      </>
    ),
  },
];
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-2/4 mx-auto mt-4">
      <div className={`border rounded-lg shadow-md mb-4 overflow-hidden ${isOpen ? 'bg-gradient-to-r from-teal-400 to-cyan-500' : 'bg-white'} transition-all duration-300 ease-in-out`}>
        <div
          className={`flex justify-between items-center p-4 cursor-pointer hover:bg-teal-100 transition-colors duration-300 ${
            isOpen ? 'bg-teal-200' : ''
          }`}
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-semibold text-teal-600">{title}</h2>
          <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300 text-teal-600`}>▼</span>
        </div>
        {isOpen && (
          <div className="p-4 border-t">
            <p className="text-gray-700">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { accordionItems, Accordion };