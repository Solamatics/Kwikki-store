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
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    "& hover": {
      textDecoration: "none",
    },
  },
});

export default useStyles;
