import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

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

export default function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPW, setVerifyPW] = useState('');

  const handleSignUpClick = event => {
    event.preventDefault()
    
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader className={classes.header} title='Sign Up'/>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Email address</InputLabel>
          <Input value={email} onChange={e => setEmail(e.target.value)} id='email' />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>{/** This should go on Signup page */}
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Password</InputLabel>
          <Input value={password} onChange={e => setPassword(e.target.value)} type='password' id='password' />
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Verify Password</InputLabel>
          <Input value={verifyPW} onChange={e => setVerifyPW(e.target.value)} type='password' id='verify-password' />
        </FormControl>
      </CardActions>
      <CardActions>
        <Button onClick={handleSignUpClick} className={classes.form}>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  )
}