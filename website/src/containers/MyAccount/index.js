import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Box, Card, Container, CssBaseline, Grid, Tab, Tabs, Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var userAccount = {
    userId: 1,
    email: 'sjj420@gmail.com',
    displayName: 'Lando Lakes',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1245453231070818308/13LhKvV4.jpg'
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Card>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar src={userAccount.avatarUrl} className={classes.large} />
            </Grid>
            <Grid item>
              <Typography>{userAccount.displayName}</Typography>
              <body>{userAccount.email}</body>
            </Grid>
          </Grid>
          <AppBar position='static'>
            <Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
              <Tab label='Account' {...a11yProps(0)} />
              <Tab label='Settings' {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Card>
      </Container>
    </React.Fragment>
  );

}

