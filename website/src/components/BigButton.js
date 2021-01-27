import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    borderRadius: 35,
    backgroundColor: '#9fafc4',
    '&:hover': {
      backgroundColor: 'gray'
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