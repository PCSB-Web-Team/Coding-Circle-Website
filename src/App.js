
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to coding circle website!!</h1>
        <p className="text-gray-700">This is an example of using Tailwind CSS in a React App.</p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
