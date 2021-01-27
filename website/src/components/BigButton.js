import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    backgroundColor: '#727d8c',
    '&:hover': {
      backgroundColor: '#9fafc4'
    }
  },
})

export default function BigButton({ text, handleClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={handleClick} >
      {text}
    </Button>
  )
}