import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 50,
    backgroundColor: '#efefef',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
});

function NotFound() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          404
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Page Not Found
        </Typography>


      </CardContent>
    </Card>
  );
}
export default NotFound;