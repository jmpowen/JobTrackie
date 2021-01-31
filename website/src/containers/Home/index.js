import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BigButton from '../../components/BigButton';

const useStyles = makeStyles({
  root: {

  },
  buttonContainer: {
    height: 200,
    paddingTop: 100,
    paddingLeft: '10%',
    paddingRight: '10%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  aboutSection: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    textAlign: 'center',
  },
  aboutTitle: {
    paddingTop: 40,
    paddingBottom: 40,
    marginTop:100,
    fontSize: 80,
    background: '#ff6600',
    color: 'white',
  },
  aboutParagraph: {
    paddingTop: 20,
    paddingBottom: 100,
    margin: 'auto',
    width: '50%',
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
      <div className={classes.aboutSection}>
        <div className={classes.aboutTitle}>About</div>
        <div className={classes.aboutParagraph}>
          JobTrackie is a site dedicated to tracking your progress with job applications to show you the most effective version of your resume and how it impacts your job search.
        </div>
      </div>
      <Footer />
    </div>
    )
}
