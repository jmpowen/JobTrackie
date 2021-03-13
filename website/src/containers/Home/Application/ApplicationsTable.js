import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    height: '400px'
  },
  statusPop: {
    padding: 10
  }
})

/**
 * 
 * @param { columnTitles, items, accessOrder, handleDelete } props 
 * columnTitles is an Array of the column titles
 * items is an Array of objects where the objects are each row
 * accessOrder is an Array of keys that are in an object inside of items, in the order that they should be accessed
 * handleDelete is a function that deletes the item from the items array
 * 
 * @returns 
 */
export default function CustomTable(props) {
  const { columnTitles, items, accessOrder, handleChangeStatus, handleDelete } = props;
  const classes = useStyles();

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
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              {columnTitles.map((title, index) =>
                index === 0 ? (
                  <TableCell>{title}</TableCell>
                ) : (
                  <TableCell align='right'>{title}</TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.id}>
                {accessOrder.map((accessor, index) =>
                  index === 0 ? (
                    <TableCell component='th' scope='row'>
                      {row[accessor]}
                    </TableCell>
                  ) : (
                    <TableCell align='right'>{row[accessor]}</TableCell>
                  )
                )}
                <TableCell align='right'>
                  <Button
                    onClick={handleClick}
                    variant='outlined'
                  >
                    Status
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
                    <Card className={classes.statusPop}>
                      <FormControl component='fieldset'>
                        <FormLabel component='legend'>Status</FormLabel>
                        <RadioGroup
                          aria-label='status'
                          name='status'
                          value={row.status}
                          onChange={(e) => handleChangeStatus(row.id, e.target.value)}
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
                    </Card>
                  </Popover>
                </TableCell>
                <TableCell align='right'>
                  <Button
                    onClick={() => handleDelete(row.id)}
                    variant='outlined'
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
