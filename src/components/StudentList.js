import React from "react";

function StudentList({ students, removeStudent }) {

  const filteredStudents =
    students.filter((student) => student.age > 18);

  return (

    <div className="list">

      <h2>Students List</h2>

      {filteredStudents.map((student, index) => (

        <div className="student-card" key={index}>

          {student.name} - {student.age} - {student.course}

          <button
            onClick={() => removeStudent(index)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default StudentList;