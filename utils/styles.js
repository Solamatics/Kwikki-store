import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      cursor: "pointer",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    "&:hover": {
      textDecoration: "none",
    },
  },
  grow: {
    flexGrow: 1
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
});

export default useStyles;