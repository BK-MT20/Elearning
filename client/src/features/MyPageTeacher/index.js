import React, { useState, useEffect } from "react";
import Axios from "axios";
import ButtonList from "./ButtonList";

MyPageTeacher.propTypes = {};

function MyPageTeacher(props) {
  const id = localStorage.getItem("id");
  console.log(id);
  const [teacherClasses, setTeacherClasses] = useState([]);
  //dialog handle

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getteacherclass?id=${id}`).then(
      (response) => {
        setTeacherClasses(response.data); //okay
      }
    );
  }, [id]);

  // const handleClickOpen = (e) => {
  //   e.stopPropagation();
  //   setOpen(true);
  // };

  // const handleClose = (e) => {
  //   e.stopPropagation();
  //   setOpen(false);
  // };

  return (
    <div>
      <ul className="teacherClassInfo">
        {teacherClasses.map((teacherClass) => (
          <li key={teacherClass.ClassId}>
            <ButtonList teacherClass={teacherClass} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPageTeacher;
