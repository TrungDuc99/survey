
import * as React from 'react'
import { Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import UnstyledButtonCustom from './components/Button/UnstyledButtonCustom';
import CustomizedSwitches from './components/Switch/CustomizedSwitches';
import UseInput from './components/TextField/UseInput';
// import TransitionGroupExample from './components/Transitions/TransitionGroupExample';
import BasicDateRangePicker from './components/DateRangePicker/BasicDateRangePicker';

function App()
{
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
  
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
        </Box>
      </Container>
    </React.Fragment>
    
  );
}

export default App;


