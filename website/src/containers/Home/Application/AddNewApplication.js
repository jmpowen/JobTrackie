import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import AlertDatePicker from '../../../components/AlertDatePicker';
import AlertSelectDocument from '../../../components/AlertSelectDocument';
import AlertTextField from '../../../components/AlertTextField';

import {
  isNullOrEmptyOrWhitespace,
  isNullOrEmpty,
  isInvalidDate,
} from '../../../helpers/inputs';

import { PostData } from '../../../services/requests';

const useStyles = makeStyles({
  root: {
    width: 850
  },
  containerDivs: {
    display: 'inline-block'
  },
  statusDiv: {
    justifyContent: 'center',
    display: 'flex',
  },
  submitButton: {
    backgroundColor: '#a6a298',
    color: 'black',
    width: '100%',
    justifyContent: 'center',
  },
});

export default function AddNewApplication({ handleClose, applicationItems, setApplicationItems, documents }) {
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
        <div className={classes.containerDivs}>
          <AlertTextField
            alert={alerts.company}
            label='Company'
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          <AlertTextField
            alert={alerts.role}
            label='Role'
            value={values.role}
            onChange={(e) => setValues({ ...values, role: e.target.value })}
          />
            <AlertDatePicker
              value={values.date}
              onChange={(date) => setValues({ ...values, date: `${date.toDateString()}` })}
              alert={alerts.date}
            />
        </div>
          <div className={classes.containerDivs}>
            <AlertSelectDocument
              alert={alerts.coverLetter}
              label='Cover Letter'
              value={values.clDocumentName}
              onChange={(e) => setValues({ ...values, clDocumentName: e.target.value })}
              selectItems={documents.coverLetters}
              newDocType='newCoverLetter'
              handleUpload={handleUpload}
            />
            <AlertSelectDocument
              alert={alerts.resume}
              label='Resume'
              value={values.rDocumentName}
              onChange={(e) => setValues({ ...values, rDocumentName: e.target.value })}
              selectItems={documents.resumes}
              newDocType='newResume'
              handleUpload={handleUpload}
            />
            <AlertSelectDocument
              alert={alerts.otherDoc}
              label='Other Document'
              value={values.oDocumentName}
              onChange={(e) => setValues({ ...values, oDocumentName: e.target.value })}
              selectItems={documents.otherDocs}
              newDocType='newOtherDoc'
              handleUpload={handleUpload}
            />
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
