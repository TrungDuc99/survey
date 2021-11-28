
import * as React from 'react'
import { Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import UnstyledButtonCustom from './components/Button/UnstyledButtonCustom';
import CustomizedSwitches from './components/Switch/CustomizedSwitches';
import UseInput from './components/TextField/UseInput';
import TransitionGroupExample from './components/Transitions/TransitionGroupExample';

function App()
{
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="App">
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
      <TransitionGroupExample></TransitionGroupExample>
     Learn Reacthttps://javhay.pro/heyzo-1897/
    </div>
  );
}

export default App;


