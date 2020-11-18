import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Current from '../Current/index';
import FiveDay from '../FiveDay/index';

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
          {/* <Typography>{children}</Typography> */}
          {children}
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
    width: 725,
    position: 'absolute',
    top: '10%',
    left: '30.5%',
    marginTop: '-50px',
    marginLeft: '-50px',
  },
  root2: {
    backgroundColor: 'rgba(0, 0, 55, 0.8)'
  }
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
        <AppBar position="static" 
        // color="primary"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            // indicatorColor="primary"
            // textColor="primary"
            variant="fullWidth"
          >
            <Tab className={classes.root2} label="5 Day Forecast" {...a11yProps(0)} />
            <Tab className={classes.root2} label="Current Weather" {...a11yProps(1)} />
            <Tab className={classes.root2} label="Road Risk" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0} >
        <FiveDay />
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Current />
      </TabPanel>
      <TabPanel value={value} index={2} >
        Item Three
        </TabPanel>


    </>
  );
}
