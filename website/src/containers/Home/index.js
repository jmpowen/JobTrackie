import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header';
import BigButton from '../../components/BigButton';

const useStyles = makeStyles({
  root: {

  },
  buttonContainer: {
    paddingTop: 100,
    paddingLeft: '10%',
    paddingRight: '10%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttons: {
    
  }
})

export default function Home() {
  const classes = useStyles();

  const handleUploadClick = e => {
    console.log('handle upload click');
  }

  const handleApplicationClick = e => {
    console.log('handle application click');
  }

  const handleInfographicsClick = e => {
    console.log('handle infographics click');
  }

  const handleTemplatesClick = e => {
    console.log('handle templates click');
  }

  const handleComparisonClick = e => {
    console.log('handle comparison click');
  }

  const handleLastButtonClick = e => {
    console.log('handle last button click');
  }

  return (
    <div>
      <Header />
      <div className={classes.buttonContainer} >
        <BigButton text='Upload Document' handleClick={handleUploadClick} />
        <BigButton text='New Application' handleClick={handleApplicationClick} />
        <BigButton text='View Infographics' handleClick={handleInfographicsClick} />
      </div>
      <div className={classes.buttonContainer} >
        <BigButton text='View Templates' handleClick={handleTemplatesClick} />
        <BigButton text='Job Description Comparison' handleClick={handleComparisonClick} />
        <BigButton text='...Need Something for this one' handleClick={handleLastButtonClick} />
      </div>
    </div>
    )
}
