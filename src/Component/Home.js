import React from 'react';
import Shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './../App.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginTop: 30,
    margin: '0 auto',
    padding:5,
  },
  heading: {
      textAlign: 'center',
      color: '#3f51b5',
  },
  head: {
      textDecoration: 'none',
      color: '#3f51b5',
  },
  data: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      width: 830,
  },
  link: {
     textDecoration: 'none',
      width: 400,
      boxShadow: '0 0 6px #3f51b5',
      alignItems: 'center',
      textAlign: 'center',
      margin : 7,
      borderRadius: 3,
  },
})
function Home() {
  const classes = useStyles();
  console.log(Shoes);
  return (
      <div className={classes.root}>
          <h1 className={classes.heading}> Home</h1>
          <div className={classes.data}>
              {Object.keys(Shoes).map((keyName) => {
                  const shoe = Shoes[keyName];
                  return (
                      <Link key={keyName} className={classes.link} to={`/product/${keyName}`} >
                          <h2 className={classes.head} >{shoe.name}</h2>
                          <img src={shoe.img} height={200} alt="shoes"/>
                      </Link>
                  )
              })}
          </div>
      </div>
  )
}

export default Home;
