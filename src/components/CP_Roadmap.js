import React from 'react';
import TypeWriterHeading from './TypeWriterHeading';

const Flowchart = () => {
  const borderColor = "#B0B0B0"; 
  return (
    <div className="flex flex-col items-center bg-gray-800 min-h-screen">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-400 pt-16 pb-10 shadow-xl w-full">
  CP ROADMAP
</h1>


      <div className="max-w-5xl w-full p-4 flex flex-col items-center">
        {/* Box 1 */}
        {/* <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
        <h2 className="text-lg font-semibold mb-2">Learn a Programming Language</h2>
          <p>• Choose a language: C++/Python/Java</p>
          <p>• Learn basic I/O syntax, inbuilt functions (STL, JCF, etc.)</p>
          <p>• Understand conditional handling, looping, functions</p>
          <p>• Attend SIG sessions for structured learning</p>
        </div> */}
        <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-gradient-to-r from-blue-300 to-purple-400 hover:scale-105 transform transition-transform duration-300 text-center border-blue-400">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Learn a Programming Language</h2>
  <p className="text-lg text-gray-700 mb-2">• Choose a language: <span className="text-purple-600">C++</span>/<span className="text-blue-600">Python</span>/<span className="text-green-600">Java</span></p>
  <p className="text-lg text-gray-700 mb-2">• Learn basic I/O syntax, inbuilt functions (<span className="text-blue-600">STL</span>, <span className="text-green-600">JCF</span>, etc.)</p>
  <p className="text-lg text-gray-700 mb-2">• Understand conditional handling, looping, functions</p>
  <p className="text-lg text-gray-700 mb-2">• Attend <span className="text-purple-600">SIG</span> sessions for structured learning</p>
</div>


        {/* Box 2 */}
        {/* <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
          <h2 className="text-lg font-semibold mb-2">Practice Questions Simultaneously</h2>
          <p>• Use HackerRank for practice</p>
          <p>• Practice questions while learning language concepts</p>
        </div> */}

<div className="border-4 rounded-lg p-6 w-100 h-auto mb-8 bg-gradient-to-br from-purple-300 to-indigo-400 hover:scale-105 transform transition-transform duration-300 text-center border-purple-500">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Practice Questions Simultaneously</h2>
  <p className="text-lg text-gray-700 mb-2">• Use <a href="https://www.hackerrank.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HackerRank</a> for practice</p>
  <p className="text-lg text-gray-700 mb-2">• Practice questions while learning language concepts</p>
</div>


        {/* ... Other boxes ... */}

        {/* Box 11 */}
        {/* <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
        <h2 className="text-lg font-semibold mb-2">Create Accounts on Coding Platforms</h2>
        <p> • <a href="https://www.codechef.com/signup" className="text-blue-500 hover:underline" target='_blank'>CodeChef</a>: Practice, select difficulty, solve problems</p>
        <p> • <a href="https://www.codechef.com/signup" className="text-blue-500 hover:underline">CodeForces</a>: Solve problems in specified difficulty range</p>
        </div> */}

<div className="border-4 rounded-lg p-6 w-100 h-auto md:h-52 mb-8 bg-gradient-to-br from-indigo-300 to-indigo-500 hover:scale-105 transform transition-transform duration-300 text-center border-indigo-600">
  <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Create Accounts on Coding Platforms</h2>
  <p className="text-lg text-gray-700 mb-2">
    • <a href="https://www.codechef.com/signup" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CodeChef</a>: Practice, select difficulty, solve problems
  </p>
  <p className="text-lg text-gray-700 mb-2">
    • <a href="https://www.codeforces.com/signup" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CodeForces</a>: Solve problems in specified difficulty range
  </p>
</div>

        {/* <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
        <h2 className="text-lg font-semibold mb-2">Problem Solving Approach</h2>
        <p>• Spend 30 mins thinking about problem</p>
        <p>• If idea, plan data structures and time complexity</p>
        <p>• Code solution in 2-3 mins</p>
        <p>• If no idea, watch YoutTube video for hints</p>
        <p>• Try thinking of solution using hints</p>
        <p>• Code solution if idea generated, else watch full video</p>
        <p>• Understand concept, solve independently after 15 days</p>
        </div> */}
        <div className="border-4 rounded-lg p-6 w-100 h-auto md:h-52 mb-8 bg-gradient-to-br from-pink-300 to-pink-500 hover:scale-105 transform transition-transform duration-300 text-center border-pink-600">
  <h2 className="text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Problem Solving Approach</h2>
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
</div>


        {/* <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
          <h2 className="text-lg font-semibold mb-2">Topics to Learn - Set 1 (Absolute Beginners)</h2>
          <p>• Number Theory: GCD, LCM, Primality Testing</p>
          <p>• Searching and Sorting: Binary Search, Prefix Sums</p>
          <p>• Inbuilt Function Library: STL (Map, Set, Vectors, etc.)</p>
          <p>• Two Pointers</p>
          <p>• Basic Bitwise Operations</p>
        </div> */}
        <div className="border-4 rounded-lg p-6 w-100 h-auto md:h-52 mb-8 bg-gradient-to-br from-teal-300 to-teal-500 hover:scale-105 transform transition-transform duration-300 text-center border-teal-600">
  <h2 className="text-2xl font-semibold mb-4 md:mb-3 text-gray-800">Topics to Learn - Set 1 (Absolute Beginners)</h2>
  <p className="text-lg text-gray-700 mb-2">• Number Theory: GCD, LCM, Primality Testing</p>
  <p className="text-lg text-gray-700 mb-2">• Searching and Sorting: Binary Search, Prefix Sums</p>
  <p className="text-lg text-gray-700 mb-2">• Inbuilt Function Library: STL (Map, Set, Vectors, etc.)</p>
  <p className="text-lg text-gray-700 mb-2">• Two Pointers</p>
  <p className="text-lg text-gray-700 mb-2">• Basic Bitwise Operations</p>
</div>


        <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
          <h2 className="text-lg font-semibold mb-2">Topics to Learn - Set 2</h2>
          <p>• Recursion</p>
          <p>• Number Theory: Sieve of Eratosthenes, Modular Arithmetic</p>
          <p>• Binary Search on Answers</p>
          <p>• Sliding Window</p>
          <p>• Greedy Algorithms</p>
        </div>

        <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
          <h2 className="text-lg font-semibold mb-2">Topics to Learn - Set 3 (Intermediate)</h2>
          <p>• Number Theory: Euler’s and Fermat’s Theorem</p>
          <p>• Dynamic Programming (Basic)</p>
          <p>• Trees and Graphs: Properties, Traversal, Diameter</p>
          <p>• Graph Algorithms: BFS, DFS, Bipartite Graphs</p>
        </div>

        <div className="border-4 rounded-lg p-4 w-100 h-45 mb-8 bg-white hover:bg-green-100 hover:scale-105 transform transition-transform duration-300 text-center" style={{ borderColor }}>
          <h2 className="text-lg font-semibold mb-2">Topics to Learn - Set 4 (Advanced)</h2>
          <p>• Dynamic Programming (Intermediate + Advanced)</p>
          <p>• Range Queries: Segment Trees, Fenwick Trees</p>
          <p>• Trees and Graphs: Binary Lifting, DP on Trees, Algorithms</p>
          <p>• Tries</p>
          <p>• Game Theory</p>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
