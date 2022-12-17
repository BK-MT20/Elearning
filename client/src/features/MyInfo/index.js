import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Avatar, Box } from "@material-ui/core";
import './index.scss'

function MyInfo() {
  const [studentInfo, setStudentInfo] = useState([]);

  let id = localStorage.getItem("id");
  console.log(id);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentinfo?id=${id}`).then(
      (response) => {
        setStudentInfo(response.data);
      }
    );
  }, [id]);

  return (
    <div className="my-info">
      <div className="my-info-card">
        <h1>Informations</h1>
        {studentInfo.length > 0 && (
          <div>
            <ul className="student-info">
              {
                Object.keys(studentInfo[0]).map(key => (
                  <li key={key}>
                    <span className="student-info-key">{key}:</span>
                    <span className="student-info-value">{studentInfo[0][key]}</span>
                  </li>
                ))
              }
            </ul>
          </div>

        )}
      </div>
    </div>
  );
}

export default MyInfo;
