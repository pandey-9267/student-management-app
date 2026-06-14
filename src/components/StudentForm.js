import React, { useState } from "react";

function StudentForm({ registerLearner }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = () => {

    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    registerLearner({
      name: name,
      age: Number(age),
      course: course
    });

    setName("");
    setAge("");
    setCourse("");
  };

  return (

    <div className="form">

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Student
      </button>

    </div>

  );

}

export default StudentForm;