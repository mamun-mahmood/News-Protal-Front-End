import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import { FormControl, MenuItem} from "@material-ui/core";
import { UserContext } from "../App";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [selectedCatagory, setSelectedCatagory] = useState('all');
setLoggedInUser(selectedCatagory);
  return (
    <div className={classes.root} style={{ marginBottom: "80px" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={"header"}>
          <div>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="headerLogo">
              <Typography variant="h4" noWrap>
                <span style={{ color: "rgba(251, 201, 27, 1)" }}>HYPER</span>
                <span style={{ color: "rgba(0, 0, 0, 1)" }}>NEWS</span>
                <span style={{ color: "rgba(251, 201, 27, 1)" }}>.</span>
              </Typography>
            </div>
          </Link>
          <div>
            <IconButton>Login</IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
      style={{overflowY: 'scroll'}}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <h3 style={{ marginRight: "auto" }}>Categories</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <FormControl>
          <List
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // // value={age}
            // name="catagory"
            // onClick={handleChange}
          >
            <MenuItem onClick={ () => setSelectedCatagory('all')} >All</MenuItem>
            <Divider/>
            <MenuItem onClick={ () => setSelectedCatagory('Top News')} >TOP News</MenuItem>
            <Divider/>
            <MenuItem onClick={ () => setSelectedCatagory("Entertainment")} >Entertainment</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Sports")} >Sports</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Music")} >Music</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("International")} >International</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Politics")} >Politics</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Nature")} >Nature</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Technology")} >Technology</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Science")} >Science</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Health")} >Health</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Religion")} >Religion</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Social")} >Social</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory('all')} >All</MenuItem>
            <Divider/>
            <MenuItem onClick={ () => setSelectedCatagory('Top News')} >TOP News</MenuItem>
            <Divider/>
            <MenuItem onClick={ () => setSelectedCatagory("Entertainment")} >Entertainment</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Sports")} >Sports</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Music")} >Music</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("International")} >International</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Politics")} >Politics</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Nature")} >Nature</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Technology")} >Technology</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Science")} >Science</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Health")} >Health</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Religion")} >Religion</MenuItem>
            <MenuItem onClick={ () => setSelectedCatagory("Social")} >Social</MenuItem>
          </List>
        </FormControl>
        <Divider />
      </Drawer>
    </div>
  );
}
