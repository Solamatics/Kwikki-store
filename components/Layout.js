import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Kwikii Store` : `Kwikii Store`}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Kwikki</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div className={classes.headerContent}>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      <ShoppingCartIcon className={classes.login} />
                    </Badge>
                  ) : (
                    <ShoppingCartIcon className={classes.login} />
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link className={classes.login}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved @kwikki store 2022</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default Layout;
