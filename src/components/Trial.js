// src/StudentTable.js
import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>DSA Resources</th>
            <th>Suggestion</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <img src={student.imageSrc} alt={`Image ${index}`} width="50" height="50" />
              </td>
              <td>{student.name}</td>
              <td>
                {student.dsaResources.map((resource, resIndex) => (
                  <div key={resIndex}>
                    {resource.topic}: {resource.link}
                  </div>
                ))}
              </td>
              <td>{student.suggestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
