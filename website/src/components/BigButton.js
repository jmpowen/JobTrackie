import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#727d8c',
    '&:hover': {
      backgroundColor: '#9fafc4'
    }
  },
})

export default function BigButton({ text, handleClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} size='large' onClick={handleClick} >
      {text}
    </Button>
  )
}