import React from "react";
import { Grid } from "@material-ui/core";
import { SmallQueueNumber, MediumQueueNumber } from "../../components/QueueNumberFolder/QueueNumber";
import "./QueueList.scss";

const tileData : Array<any> = new Array(15).fill(0);

export default function QueueList() {
  return (
    <div className="QueueList">
      <Grid container>
        {tileData.map((tile, index) => {
          if (index === 0) {
            return (
              <Grid item xs={12} key={index} className="item">
                <MediumQueueNumber />
              </Grid>
            );
          }
          else {
            return (
              <Grid item xs={4} key={index} className="item">
                <SmallQueueNumber />
              </Grid>
            )
          }
        })}
      </Grid>
    </div>
  );
}
