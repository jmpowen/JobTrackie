import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function MyAccount() {

  const classes = useStyles();

  var userAccount = {
    email: 'sjj420@gmail.com',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1245453231070818308/13LhKvV4.jpg'
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Card>
          <Avatar src={userAccount.avatarUrl} className={classes.large} />
        </Card>
      </Container>
    </React.Fragment>
  );

}
