import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import DeleteIcon from "@material-ui/icons/Delete";

import "./ServerControls.scss";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      padding: "10px 20px"
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  })
);

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className="command-buttons">
          <Button color="default">Disable Server</Button>
          <Button color="secondary">Skip Number</Button>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="server-number-container">
            <div className="server-number-header">Server Number</div>
            <Typography component="h1" variant="h1">
              001
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <List 
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Queue Priority Order
              </ListSubheader>
            }
          >
            {generate(
              <div>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>1</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Regular" />
                </ListItem>
              </div>
            )}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Last Unanswered Calls
              </ListSubheader>
            }
          >
            {generate(
              <div>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ErrorIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="G-278" secondary="Anonymous" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </div>
            )}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
