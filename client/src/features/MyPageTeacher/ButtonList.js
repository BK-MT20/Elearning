import React, { useState } from "react";
import Axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box } from "@material-ui/core";
import { ListAlt } from "@material-ui/icons";

function ButtonList(props) {
  const { teacherClass } = props;
  const roomDetail = teacherClass;

  const [openStudentList, setOpenStudentList] = useState(false);
  const [openRoomDetail, setOpenRoomDetail] = useState(false);
  const [openTextBook, setOpenTextBook] = useState(false);

  const [studentList, setStudentList] = useState([]);
  const [textBookList, setTextBookList] = useState([]);

  const handleClose = (name) => {
    switch(name){
      case 'StudentList':
        setOpenStudentList(false);
        break;
      case 'RoomDetail':
        setOpenRoomDetail(false);
        break;
      case 'TextBook':
        setOpenTextBook(false);
        break;
      default:
        break;
    }
  };

  function handleStudentList() {
    setOpenStudentList(!openStudentList);
    Axios.get(`http://localhost:3001/api/getstudentinclass?classId=${teacherClass.ClassId}`).then(
      (response) => {
        setStudentList(response.data); //okay
      }
    );
  };

  function handleRoomDetail() {
    setOpenRoomDetail(!openRoomDetail);
  };

  function handleTextBook() {
    setOpenTextBook(!openTextBook);
    Axios.get(`http://localhost:3001/api/gettextbook?subjectId=${teacherClass.CSubjectId}`).then(
      (response) => {
        console.log('book: ', response.data)
        setTextBookList(response.data); //okay
      }
    );
  };

  function renderStudent(st){
    return(
      <Box style={{display: 'flex', flexDirection: 'row'}}>
        <DialogContentText>
          Student Id: {st.StudentId}
        </DialogContentText>
        <DialogContentText>
          ClassId Id: {st.ClassId}
        </DialogContentText>
        <DialogContentText>
          SemesterId: {st.SemesterId}
        </DialogContentText>
      </Box>
    );
  }

  function renderRoomDetail(){
    return(
      <Box>
        <DialogContentText>
          Class Id: {roomDetail.ClassId}
        </DialogContentText>
        <DialogContentText>
          Subject Id: {roomDetail.CSubjectId}
        </DialogContentText>
        <DialogContentText>
          Numbers of Student: {roomDetail.NumberOfStudent}
        </DialogContentText>
        <DialogContentText>
          Main Teacher: {roomDetail.MainTeacher}
        </DialogContentText>
        <DialogContentText>
          Falcility: {roomDetail.CFalcility}
        </DialogContentText>
        <DialogContentText>
          Building: {roomDetail.CBuilding}
        </DialogContentText>
        <DialogContentText>
          Room: {roomDetail.CRoom}
        </DialogContentText>
      </Box>
    );
  }

  function renderTextBook(book){
    return(
      <Box>
        <DialogContentText>
          Subject Id: {book.UseSubjectId}
        </DialogContentText>
        <DialogContentText>
          TextBook Id: {book.UseTextBookId}
        </DialogContentText>
        <DialogContentText>
          TextBook Name: {book.TextBookName}
        </DialogContentText>
        <DialogContentText>
          Released: {book.YearOfRelease}
        </DialogContentText>
      </Box>
    );
  }

  return (
    <Box>
      <p>{teacherClass.CRoom}{teacherClass.CBuilding}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleStudentList()}
        startIcon={<ListAlt />}
      >
        Student List
      </Button>
      <Dialog
        open={openStudentList}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Student List
        </DialogTitle>
        <DialogContent>
          {studentList.map(st => renderStudent(st))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('StudentList')} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleRoomDetail()}
        startIcon={<ListAlt />}
      >
        Room Detail
      </Button>
      <Dialog
        open={openRoomDetail}
        onClose={(e) => handleClose('RoomDetail')}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          {renderRoomDetail()}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('RoomDetail')} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleTextBook()}
        startIcon={<ListAlt />}
      >
        Custom TextBook
      </Button>
      <Dialog
        open={openTextBook}
        onClose={(e) => handleClose('TextBook')}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          { textBookList.map(book => renderTextBook(book)) }
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('TextBook')} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ButtonList;
