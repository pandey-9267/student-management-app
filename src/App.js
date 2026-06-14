import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const registerLearner = (studentData) => {

    if (studentData.age <= 18) {
      alert("Age must be greater than 18");
      return;
    }

    setTimeout(() => {
      setStudents([...students, studentData]);
    }, 500);

  };

  const removeStudent = (indexValue) => {

    const updatedStudents =
      students.filter((_, index) => index !== indexValue);

    setStudents(updatedStudents);

  };

  return (

    <div className="container">

      <h1 className="title">
        Student Management System
      </h1>

      <StudentForm registerLearner={registerLearner} />

      <StudentList
        students={students}
        removeStudent={removeStudent}
      />

    </div>

  );

}

export default App;