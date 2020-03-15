import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function SmallQueueNumber() {
  return (
    <Card className="QueueNumber small">
      <div className="details">
        <CardContent className="content">
          <Typography component="h5" variant="h5">
            G-281
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
