
import * as React from 'react'
import { Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import UnstyledButtonCustom from './components/Button/UnstyledButtonCustom';
import CustomizedSwitches from './components/Switch/CustomizedSwitches';
import UseInput from './components/TextField/UseInput';
// import TransitionGroupExample from './components/Transitions/TransitionGroupExample';
import BasicDateRangePicker from './components/DateRangePicker/BasicDateRangePicker';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
function App()
{
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        
       
     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
      <Button variant="contained" >
Login
      </Button>
      <UnstyledButtonCustom></UnstyledButtonCustom>
      <CustomizedSwitches></CustomizedSwitches>
      <UseInput></UseInput>
      {/* <TransitionGroupExample></TransitionGroupExample> */}
      <BasicDateRangePicker></BasicDateRangePicker>
      </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;