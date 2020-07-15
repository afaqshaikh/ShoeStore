import React from 'react';
import Shoes from './../shoes.json';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NotFound from './NotFound';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    marginTop: 20,
    margin: '0 auto',
    padding:5,
  },
  heading: {
      textAlign: 'center',
      color: '#3f51b5',
  },
  headings: {
    textAlign: 'center',
    color: '#3f51b5',
    fontWeight: 'bold',
    marginTop: 5,
},
  link: {
    textDecoration: 'none',
     width: 600,
     boxShadow: '0 0 6px #3f51b5',
     alignItems: 'center',
     textAlign: 'center',
     margin : '0 auto',
     marginTop: 8,
     borderRadius: 3,
     padding: 6,
 },
})

function ProductItem() {
  const classes = useStyles();
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);

  if (!shoe) {
    return <NotFound />
  }

  return (
    <div className={classes.root} >
      <h1  className={classes.heading}>Welcome to ProductItem</h1>
      <div className={classes.link}>
        <h2  className={classes.headings}>{shoe.name}</h2>
        <img src={shoe.img} height={500} alt="shoes" />
      </div>
    </div>
  )
}

export default ProductItem;
