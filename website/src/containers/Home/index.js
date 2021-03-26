import { makeStyles } from '@material-ui/core/styles';

import Applications from './Application/Applications';

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

  return (
    <div>
      <br />
      <Applications />
      <br />
      <br />
      <div className={classes.aboutSection}>
        <div className={classes.aboutTitle}>About</div>
        <div className={classes.aboutParagraph}>
          JobTrackie is a site dedicated to tracking your progress with job applications to show you the most effective version of your resume and how it impacts your job search.
        </div>
      </div>
    </div>
    )
}
