import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
  const { columnTitles, items, accessOrder, handleDelete } = props;

  return (
    <>
      <TableContainer component={Paper}>
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
