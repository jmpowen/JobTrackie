import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import CustomTable from '../../components/CustomTable';

import {
  isNullOrNaNOrLessThanOrEqualToZero,
  isNullOrEmptyOrWhitespace,
} from "../../helpers/inputs";

const useStyles = makeStyles({
  root: {
    fontFamily: 'Arial',
  },
  headerDiv: {
    display: 'flex'
  },
  header: {
    marginLeft: '10%',
    fontSize: '50px',
    marginRight: '20px'
  },
  addAppButton: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '50px',
    backgroundColor: '#ff6600',
    color: 'white'
  },
  tableDiv: {
    marginLeft: '10%',
    width: '80%'
  }
})

const applicationColumnTitles = [
  "    ", // Delete will be at the front (and will simply act as a 'do-not-show-any-longer' button)
  "Company",
  "Role",
  "Date & Time",
  "Cover Letter",
  "Resume",
  "Other Documents",
  "Status" // Functionality of the status column needs to move resumes that have been 'closed' to the bottom
]

const applicationAccessOrder = [
  "company",
  "role",
  "datetime",
  "coverLetter",
  "resume",
  "otherDocs",
  "status"
]

/**
 * Table items need to be ordered by STATUS, then DATE.
 * What I mean: applications with status as 'applied', '1st round', '2nd round' are at the top, 'rejected' at the bottom
 * Then 'applied' will be ordered by the date
 * @returns 
 */
export default function Applications() {
  const classes = useStyles();

  const [values, setValues] = useState({
    company: null,
    role: null,
    datetime: null,
    coverLetter: null,
    resume: null,
    otherDocs: null,
    status: null,
    applicationItems: [],
  })

  const [alerts, setAlerts] = useState({
    company: false,
    role: false,
    datetime: false,
    coverLetter: false,
    resume: false,
    otherDocs: false,
    status: false,
  })

  const handleAddNewApplication = () => {
    let aCompany = isNullOrEmptyOrWhitespace(values.company);
    let aRole = isNullOrEmptyOrWhitespace(values.role);
    let aDatetime = false; // Need to create a time picker that the user can select date and time from...(probably won't be checked except to make sure no future dates/times)
    let aCoverLetter = false; // Just need to check its not null(they selected a document basically or 'No Cover Letter Option')
    let aResume = false; // Same as above
    let aOtherDocs = false // Same as above
    let aStatus = false; // Probably won't be needed. Just here for now while I build it out. Status will be preselected to 'applied' but user can change to something else

    setAlerts({
      company: aCompany,
      role: aRole,
      datetime: aDatetime,
      coverLetter: aCoverLetter,
      resume: aResume,
      otherDocs: aOtherDocs,
      status: aStatus
    })

    if (aCompany || aRole || aDatetime || aCoverLetter || aResume || aOtherDocs || aStatus) {
      return;
    }

    let aItems = values.applicationItems;

    aItems.push({
      id: aItems.length,
      company: values.company,
      role: values.role,
      datetime: values.datetime,
      coverLetter: values.coverLetter,
      resume: values.resume,
      otherDocs: values.otherDocs,
      status: values.status,
    });

    setValues({
      ...values,
      company: null,
      role: null,
      datetime: null,
      coverLetter: null,
      resume: null,
      otherDocs: null,
      status: null,
      applicationItems: aItems
    });
  }

  const handleDeleteApplicationItem = (index) => {
    let aItems = values.applicationItems;

    aItems.splice(index, 1);
    aItems.forEach((item, index) => (item.id = index));

    setValues({
      ...values,
      applicationItems: aItems
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.headerDiv}>
        <h1 className={classes.header}>Applications</h1>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          className={classes.addAppButton} 
          onClick={handleAddNewApplication}>Add New Application</Button>
      </div>
      <div className={classes.tableDiv}>
        <CustomTable 
          columnTitles={applicationColumnTitles}
          items={values.applicationItems}
          accessOrder={applicationAccessOrder}
          handleDelete={handleDeleteApplicationItem}
        />
      </div>
    </div>
  )
}