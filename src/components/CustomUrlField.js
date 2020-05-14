import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
import React from "react";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
});

const CustomUrlField = ({ record = {}, source }) => {
  const classes = useStyles();
  return (
    <a className={classes.link} href={record[source]}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default CustomUrlField;
