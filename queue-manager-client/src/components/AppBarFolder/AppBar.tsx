import React from "react";
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppBar.scss";

export default class AppBar extends React.Component {
  render() {
    return (
      <div className="AppBar-root">
        <MUIAppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="AppBar-menuButton"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="AppBar-title">
              Queue Manager
            </Typography>
            <Button color="inherit">Close</Button>
          </Toolbar>
        </MUIAppBar>
      </div>
    );
  }
}
