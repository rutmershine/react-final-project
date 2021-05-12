import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NewProduct from './NewProduct';



function Management() {
  const managerPassword = '1';
  let password;
  let isCorrect = false;


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();


  const checkPass = (password) => {

    if (password !== managerPassword) {

      isCorrect = false;
      setState('');
      console.log(isCorrect);
      setInValidMes('סיסמה שגויה');

    }
    else {
      isCorrect = true;
      setState(1);
      console.log(isCorrect);
    }
  }

  const [inValidMes, setInValidMes] = useState('');
  const [state, setState] = useState('');

  const checkPasswordControlled = (event) => {
    event.preventDefault();
    checkPass(password);

  }

  return (!state ?
    <div>
      <form onSubmit={checkPasswordControlled}>

        <div>
          <TextField id="standard-error" label="הקש סיסמת מנהל" onChange={() => setInValidMes('')}
            onBlur={e => password = e.target.value} helperText={inValidMes} />{/*error defaultValue="Hello World" */}
        </div>
        <button type="submit" >אישור</button>

      </form>
    </div> : <div><NewProduct /></div>
  );
}

export default Management;
