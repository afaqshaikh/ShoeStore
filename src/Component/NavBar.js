import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    margin: 5,
    color: '#fff',
    textDecoration: 'none',
    padding: 5,
  }
}));

 function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">Home</Link>
            <Link className={classes.link} to="/about">About</Link>
            <Link className={classes.link} to="/product">Product</Link>

          </Typography>
          {/* <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Typography variant="h6" className={classes.title}>
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;