import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box } from "@material-ui/core";

function MyInfoTeacher() {
  const [teacherInfo, setTeacherInfo] = useState([]);
  let id = localStorage.getItem("id");

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getteacherinfo?id=${id}`).then(
      (response) => {
        console.log(response.data);
        setTeacherInfo(response.data);
      }
    );
  }, [id]);

  return (
    <div className="App">
      <h1>Teacher Info</h1>
      <ul className="teacherInfo">
        {teacherInfo.map((teacher) => (
          <li key={teacher.TeacherId}>
            <Box>
              Id: {teacher.TeacherId} | Name: {teacher.TeacherName} | FalcutyID:
              {teacher.TFacultyId}
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyInfoTeacher;
