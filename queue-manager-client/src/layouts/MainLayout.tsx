import React from "react";
import { CssBaseline, Container, Card } from "@material-ui/core";
import AppBar from "../components/AppBarFolder/AppBar";

export default class MainLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className="fill-height no-padding">
          <Card className="fill-height no-padding">
            <AppBar />
            {this.props.children}
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
