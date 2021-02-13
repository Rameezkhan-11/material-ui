import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
import Navbar from './Navbar';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    height: '400px',
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
    padding : 15,
    marginTop : 15
    

  },
  input : {
    width : '95%',
    marginBottom : '10'
  },
  Button :{
    marginTop: 10,
    backgroundColor : 'green'
    

  }
}));

function App() {
  const classes = useStyles();
  return (
    <>

      <div className={classes.root}>
        <Navbar />

        <Paper elevation={3} className={classes.paper}>
          <h1>Login</h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter userName" className={classes.input} />

            <TextField id="standard-basic" label="Enter Pasword" className={classes.input} />
              
            <Button variant="contained"  className={classes.Button}>
              Login
</Button>

          </form>

        </Paper>
      </div>

      <Chart />

    </>
  );
}

export default App;
