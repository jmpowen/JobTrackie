import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, FormControl, Input, FormHelperText, InputLabel } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    marginTop: '10%',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '40%',
  },
  header: {
    margin: 'auto',
    backgroundColor: blue[500],
  },
  form: {
    margin: 'auto',
  }
})

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = event => {
    event.preventDefault()
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader className={classes.header} title='Login'/>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Email address</InputLabel>
          <Input value={email} onChange={e => setEmail(e.target.value)} id='email' aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>{/** This should go on Signup page */}
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Password</InputLabel>
          <Input value={password} onChange={e => setPassword(e.target.value)} id='password' aria-describedby='my-helper-text' />
        </FormControl>
      </CardActions>
      <CardActions>
        <Button onClick={handleLoginClick} className={classes.form}>
          Login
        </Button>
      </CardActions>
    </Card>
  )
}