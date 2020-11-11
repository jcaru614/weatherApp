import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Current from '../Current/index';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: 570,
    position: 'absolute',
    top: '10%',
    left: '35.5%',
    marginTop: '-50px',
    marginLeft: '-50px',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Current Weather" {...a11yProps(0)} />
            <Tab label="Hourly Forecast" {...a11yProps(1)} />
            <Tab label="Road Risk" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0} >
        <Current />
        </TabPanel>
      <TabPanel value={value} index={1} >
        Item Two
        </TabPanel>
      <TabPanel value={value} index={2} >
        Item Three
        </TabPanel>


    </>
  );
}
