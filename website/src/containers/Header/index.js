import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    textAlign: 'center',
    background: '#ff6600',
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '30px'
  }
})

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Job Trackie</h1>
    </div>
  );
}