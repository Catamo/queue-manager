import React from "react";
import { Grid } from "@material-ui/core";
import QueueList from "../components/QueueListFolder/QueueList";
import BottomBar from "../components/BottomBarFolder/BottomBar";
import { LargeQueueNumber } from "../components/QueueNumberFolder/QueueNumber";
import ServerControls from "../components/ServerControlsFolder/ServerControls";

export default class ServerView extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={5}>
          <QueueList />
        </Grid>
        <Grid item sm={7}>
          <Grid container>
            <Grid item xs={12} className="number-container">
              <LargeQueueNumber />
            </Grid>
            <Grid item xs={12}>
              <ServerControls />
            </Grid>
          </Grid>
        </Grid>
        <BottomBar />
      </Grid>
    );
  }
}
