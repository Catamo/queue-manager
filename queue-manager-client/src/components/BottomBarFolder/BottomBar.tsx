import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import "./BottomBar.scss";

export default function BottomBar() {
  let value;
  const setValue = (newValue: any) => {
    value = newValue;
  };

  return (
    <React.Fragment>
      <Box component="div" display={{ xs: "block", sm: "none" }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className="BottomBar"
        >
          <BottomNavigationAction label="Queue" icon={<PeopleIcon />} />
          <BottomNavigationAction label="Current" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
}
