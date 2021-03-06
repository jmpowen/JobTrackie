import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
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
        </FormControl>
      </CardActions>
      <CardActions>
        <FormControl className={classes.form}>
          <InputLabel htmlFor='my-input'>Password</InputLabel>
          <Input value={password} onChange={e => setPassword(e.target.value)} type='password' id='password' aria-describedby='my-helper-text' />
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