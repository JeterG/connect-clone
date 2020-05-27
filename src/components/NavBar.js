import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                euismod neque. Donec malesuada nibh ac erat maximus, eu volutpat
                dui malesuada. Maecenas vitae accumsan nunc. Nam eu nibh
                finibus, pharetra lectus non, accumsan lectus. Proin tincidunt
                iaculis posuere. Integer vulputate rhoncus dolor et feugiat. Sed
                ut ipsum luctus, hendrerit justo at, fringilla nisi. Suspendisse
                et enim scelerisque, molestie augue vel, aliquet leo. Proin
                vitae odio sed lectus mollis vestibulum. Donec egestas venenatis
                dolor, a pretium ante. Mauris elementum ipsum sit amet tristique
                malesuada. Duis tincidunt in quam et tempus. Ut tincidunt nulla
                vel ante iaculis cursus.
              </Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pellentesque non nunc eu eros rutrum venenatis. Nullam
                condimentum erat lectus, nec faucibus mauris consectetur
                finibus. Morbi venenatis pharetra nulla, volutpat lacinia risus
                varius sed. Mauris a quam euismod, congue justo sit amet,
                commodo sem. Sed vitae ultrices ante. Maecenas finibus, dolor
                vitae congue auctor, purus urna suscipit metus, non laoreet dui
                ligula vitae metus. Phasellus lacus arcu, tempor ut justo nec,
                ultrices semper risus. Proin et turpis leo. Morbi commodo a leo
                non aliquam. Donec nec lacus condimentum, auctor ex ac,
                imperdiet risus. Nam sapien quam, porta sed lacus at, varius
                molestie est. Nulla dictum elementum vulputate. Suspendisse
                potenti. Fusce dictum dignissim mauris, at dapibus lorem laoreet
                mattis.
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default NavBar;
