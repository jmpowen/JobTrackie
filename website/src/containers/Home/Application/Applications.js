import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';

import CustomTable from '../../../components/CustomTable';

import AddNewApplication from './AddNewApplication';

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
  "    ", // Delete will be at the front (and will simply act as a 'do-not-show-any-longer' button)
]

const applicationAccessOrder = [
  "company",
  "role",
  "date",
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

  const [applicationItems, setApplicationItems] = useState([])

  const handleChangeStatus = (index) => {
    // FUCK THIS IS GOING TO BE INTERESTING TO IMPLEMENT...I'M GOING TO HAVE TO THINK ON IT
  }

  const handleDeleteApplicationItem = (index) => {
    let aItems = [...applicationItems];

    aItems.splice(index, 1);
    aItems.forEach((item, index) => (item.id = index));

    setApplicationItems(aItems);
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <div className={classes.headerDiv}>
        <h1 className={classes.header}>Applications</h1>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          className={classes.addAppButton} 
          onClick={handleClick}
        >
          Add New Application
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <AddNewApplication handleClose={handleClose} applicationItems={applicationItems} setApplicationItems={setApplicationItems} />
        </Popover>
      </div>
      <div className={classes.tableDiv}>
        <CustomTable 
          columnTitles={applicationColumnTitles}
          items={applicationItems}
          accessOrder={applicationAccessOrder}
          handleDelete={handleDeleteApplicationItem}
        />
      </div>
    </div>
  )
}