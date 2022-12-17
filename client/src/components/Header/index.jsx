import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Add, Input } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  LinearProgress,
} from "@material-ui/core";
import LoginForm from "../LoginForm";
import Axios from "axios";

const handleAddClick = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

const session = {
  username: "",
  password: NaN,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
  right: {
    position: "absolute",
    right: 10,
    bottom: 15,
  },
}));

const handleSubmit = (e) => {
  e.preventDefault();
  let request = {
    username: document.getElementById("name").value,
    password: document.getElementById("pass").value,
  };
  // let route = "http://localhost:3001/api/login";
  // route += "?id=" + request.username;
  // console.log(route);
  console.log(request); // okay
  Axios.get(`http://localhost:3001/api/login?id=${request.username}`)
    .then((result) => {
      localStorage.setItem("id", `${request.username}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <NavLink exact to="/" className={classes.link}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink className={classes.link} to="/mypage">
            <Button color="inherit">My Page</Button>
          </NavLink>

          <NavLink className={classes.link} to="/register">
            <Button color="inherit">Register</Button>
          </NavLink>

          <NavLink className={classes.link} to="/myinfo">
            <Button color="inherit">My Info</Button>
          </NavLink>

          <a
            className={classes.link}
            href="http://www.aao.hcmut.edu.vn/index.php?route=catalog/chuongtrinhdaotao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit">Chương trình đào tạo</Button>
          </a>
          <Box className={`${classes.right}`}>
            {/* <Button
              variant="contained"
              color="primary"
              startIcon={<Input />}
              onClick={handleAddClick}
            >
              Login
            </Button> */}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              Login
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <form onSubmit={(e) => handleSubmit(e)}>
                <DialogTitle id="form-dialog-title">Sign in</DialogTitle>

                <DialogContent>
                  <DialogContentText>
                    To get into this website, must be sign in first
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Username"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button type="submit" onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
