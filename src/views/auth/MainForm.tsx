import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { FormContainer } from '../../components/FormContainer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MainForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <FormContainer color='#24323B'>
      <AppBar position='sticky' elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          style={{ justifyContent: 'space-between' }}
        >
          <Tab style={{ margin: 15 }} label='Sign Up' {...a11yProps(0)} />
          <Tab style={{ margin: 15 }} label='Login' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Register />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login />
      </TabPanel>
    </FormContainer>
  );
};

export default MainForm;
