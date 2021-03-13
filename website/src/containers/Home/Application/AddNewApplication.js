import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';

import {
  isNullOrEmptyOrWhitespace,
  isNullOrEmpty,
  isInvalidDate,
} from '../../../helpers/inputs';

import { PostData } from '../../../helpers/httpRequests';

const useStyles = makeStyles({
  root: {},
  firstDiv: {
    height: '30px',
  },
  inputItems: {
    width: '24%',
    margin: 10,
  },
  statusDiv: {
    justifyContent: 'center',
    display: 'flex',
  },
  alert: {
    marginTop: 14,
    display: 'inline-block',
    marginRight: 5,
    marginLeft: 5,
    width: 53,
  },
  submitButton: {
    backgroundColor: '#a6a298',
    color: 'black',
    width: '100%',
    justifyContent: 'center',
  },
});

export default function AddNewApplication(props) {
  const { handleClose, applicationItems, setApplicationItems, documents } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    company: '',
    role: '',
    date: `${new Date().toDateString()}`,
    coverLetter: null,
    clDocumentName: '',
    resume: null,
    rDocumentName: '',
    otherDoc: null,
    oDocumentName: '',
    status: 'Applied',
  });

  const [alerts, setAlerts] = useState({
    company: false,
    role: false,
    date: false,
    coverLetter: false,
    resume: false,
    otherDoc: false,
    status: false,
  });

  const postApplication = () => {
    PostData('somerURL', applicationItems[applicationItems.length - 1])
      .then((res) => {
        if (res === 'success') {
          // Or something
          // Do nothing?
        } else {
          // Alert sending to DB failed
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddNewApplication = () => {
    let aCompany = isNullOrEmptyOrWhitespace(values.company);
    let aRole = isNullOrEmptyOrWhitespace(values.role);
    let aDate = isInvalidDate(values.date); // Need to create a time picker that the user can select date and time from...(probably won't be checked except to make sure no future dates/times)
    let aCoverLetter = isNullOrEmpty(values.clDocumentName); // Just need to check its not null(they selected a document basically or 'No Cover Letter Option')
    let aResume = isNullOrEmpty(values.rDocumentName); // Same as above
    let aOtherDoc = isNullOrEmpty(values.oDocumentName); // Same as above

    setAlerts({
      company: aCompany,
      role: aRole,
      date: aDate,
      coverLetter: aCoverLetter,
      resume: aResume,
      otherDoc: aOtherDoc,
    });

    console.log(aCompany + " " +
      aRole + " " +
      aDate + " " +
      aCoverLetter + " " +
      aResume + " " +
      aOtherDoc);

    if (
      aCompany ||
      aRole ||
      aDate ||
      aCoverLetter ||
      aResume ||
      aOtherDoc
    ) {
      return;
    }

    // Going to have to revisit if I can just return an item and add in the func added
    let aItems = applicationItems;

    aItems.push({
      id: aItems.length,
      company: values.company,
      role: values.role,
      date: `${values.date}`,
      coverLetter: values.coverLetter,
      resume: values.resume,
      otherDoc: values.otherDoc,
      status: values.status,
    });

    setValues({
      ...values,
      company: null,
      role: null,
      date: null,
      coverLetter: null,
      resume: null,
      otherDoc: null,
      status: null,
    });

    setApplicationItems(aItems);

    postApplication();

    handleClose();
  };

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    console.log('here')

    if (e.target.value === 'newCoverLetter') {
      setValues({ ...values, coverLetter: formData })
    } else if (e.target.value === 'newResume') {
      setValues({ ...values, resume: formData })
    } else if (e.target.value === 'newOtherDoc') {
      setValues({ ...values, otherDoc: formData })
    }
    console.log(e.target.value);
  };

  return (
    <>
      <Card className={classes.root}>
        <div>
          <TextField
            className={classes.inputItems}
            label='Company'
            variant='filled'
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          {alerts.company ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
          <TextField
            className={classes.inputItems}
            label='Role'
            variant='filled'
            value={values.role}
            onChange={(e) => setValues({ ...values, role: e.target.value })}
          />
          {alerts.role ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            className={classes.inputItems}
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Date picker inline'
              value={values.date}
              onChange={(date) =>
                setValues({ ...values, date: `${date.toDateString()}` })
              }
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          {alerts.date ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
        </div>
        <div>
          <div>
            <FormControl variant='outlined' className={classes.inputItems}>
              <InputLabel>Cover Letter</InputLabel>
              <Select value={values.clDocumentName} onChange={(e) => setValues({ ...values, clDocumentName: e.target.value })} label='Document'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {documents.coverLetters.map(coverLetter => (
                  <MenuItem value={coverLetter.name}>
                    {coverLetter.name}
                  </MenuItem>
                ))}
                <MenuItem value='newCoverLetter'>
                  <FormControl>
                    <Input type='file' onChange={handleUpload} variant='outlined' />
                  </FormControl>
                </MenuItem>
              </Select>
            </FormControl>
            {alerts.coverLetter ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
            <FormControl variant='outlined' className={classes.inputItems}>
              <InputLabel>Resume</InputLabel>
              <Select value={values.rDocumentName} onChange={(e) => setValues({ ...values, rDocumentName: e.target.value })} label='Document'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {documents.resumes.map(resume => (
                  <MenuItem value={resume.name}>
                    {resume.name}
                  </MenuItem>
                ))}
                <MenuItem value='newResume'>
                  <FormControl>
                    <Input type='file' onChange={handleUpload} variant='outlined' />
                  </FormControl>
                </MenuItem>
              </Select>
            </FormControl>
            {alerts.resume ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
            <FormControl variant='outlined' className={classes.inputItems}>
              <InputLabel>Other Document</InputLabel>
              <Select value={values.oDocumentName} onChange={(e) => setValues({ ...values, oDocumentName: e.target.value })} label='Document'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {documents.otherDocs.map(otherDoc => (
                  <MenuItem value={otherDoc.name}>
                    {otherDoc.name}
                  </MenuItem>
                ))}
                <MenuItem value='newOtherDoc'>
                  <FormControl>
                    <Input type='file' onChange={handleUpload} variant='outlined'/>
                  </FormControl>
                </MenuItem>
              </Select>
            </FormControl>
            {alerts.otherDoc ? (
              <div className={classes.alert}>
                <Alert severity='error' />
              </div>
            ) : (
              <div className={classes.alert}></div>
            )}
          </div>
        </div>
        <div className={classes.statusDiv}>
          <FormControl component='fieldset'>
            <RadioGroup
              row
              aria-label='status'
              name='statuss'
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <FormControlLabel
                value='Applied'
                control={<Radio />}
                label='Applied'
              />
              <FormControlLabel
                value='Interviewing'
                control={<Radio />}
                label='Interviewing'
              />
              <FormControlLabel
                value='Rejected'
                control={<Radio />}
                label='Rejected'
              />
              <FormControlLabel
                value='Offered'
                control={<Radio />}
                label='Offered'
              />
              <FormControlLabel
                value='Offer Rejected'
                control={<Radio />}
                label='Offer Rejected'
              />
              <FormControlLabel
                value='Employed'
                control={<Radio />}
                label='Employed'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button
            className={classes.submitButton}
            onClick={handleAddNewApplication}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  );
}
