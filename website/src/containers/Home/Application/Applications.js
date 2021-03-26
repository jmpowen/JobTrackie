import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Popover from '@material-ui/core/Popover';

import AddNewApplication from './AddNewApplication';
import ApplicationsTable from './ApplicationsTable';
import UploadDocument from './UploadDocument';

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
  addButton: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
    height: '50px',
    backgroundColor: '#ff6600',
    color: 'white'
  },
  tableDiv: {
    marginLeft: '10%',
    width: '80%',
  }
})

const applicationColumnTitles = [
  "Company",
  "Role",
  "Date",
  "Cover Letter",
  "Resume",
  "Other Documents",
  "Status", // Functionality of the status column needs to move resumes that have been 'closed' to the bottom
  " ", // Delete will be at the front (and will simply act as a 'do-not-show-any-longer' button)
  " "
]

const applicationAccessOrder = [
  "company",
  "role",
  "date",
  "coverLetter",
  "resume",
  "otherDocs",
  "status",
]

/**
 * Table items need to be ordered by STATUS, then DATE.
 * What I mean: applications with status as 'applied', '1st round', '2nd round' are at the top, 'rejected' at the bottom
 * Then 'applied' will be ordered by the date
 * @returns 
 */
export default function Applications() {
  const classes = useStyles();

  const [applicationItems, setApplicationItems] = useState([])

  const [documents, setDocuments] = useState({
    coverLetter: [],
    resumes: [],
    otherDocs: []
  })

  const handleChangeStatus = (index, status) => {
    let aItems = [...applicationItems];

    aItems.filter(aItem => aItem.id === index)[0].status = status;

    setApplicationItems(aItems);
  }

  const handleDeleteApplicationItem = (index) => {
    let aItems = [...applicationItems];

    aItems.splice(index, 1);
    aItems.forEach((item, index) => (item.id = index));

    setApplicationItems(aItems);
  }
  
  // Add App Popover Controls
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  }

  const handleClose1 = () => {
    setAnchorEl1(null);
  }

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popover' : undefined;
  
  // Add Doc Popover Controls
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  }

  const handleClose2 = () => {
    setAnchorEl2(null);
  }

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <div className={classes.headerDiv}>
        <h1 className={classes.header}>Applications</h1>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          className={classes.addButton} 
          onClick={handleClick1}
        >
          Add New Application
        </Button>
        <Popover
          id={id1}
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <AddNewApplication handleClose={handleClose1} applicationItems={applicationItems} setApplicationItems={setApplicationItems} documents={documents} />
        </Popover>
        <Button
          variant='contained'
          startIcon={<CloudUploadIcon />}
          className={classes.addButton} 
          onClick={handleClick2}
        >
          Upload Document
        </Button>
        <Popover
          id={id2}
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClose2}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <UploadDocument handleClose={handleClose2} documents={documents} setDocuments={setDocuments} />
        </Popover>
      </div>
      <div className={classes.tableDiv}>
        <ApplicationsTable 
          columnTitles={applicationColumnTitles}
          items={applicationItems}
          accessOrder={applicationAccessOrder}
          handleChangeStatus={handleChangeStatus}
          handleDelete={handleDeleteApplicationItem}
        />
      </div>
    </div>
  )
}