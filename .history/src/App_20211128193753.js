
import * as React from 'react'
import { Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';

import UnstyledButtonCustom from './components/Button/UnstyledButtonCustom';
import CustomizedSwitches from './components/Switch/CustomizedSwitches';
import UseInput from './components/TextField/UseInput';
// import TransitionGroupExample from './components/Transitions/TransitionGroupExample';
import BasicDateRangePicker from './components/DateRangePicker/BasicDateRangePicker';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Routes from './Routes';
function App()
{
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
       <Switch>
            <Routes />
          </Switch>
    </React.Fragment>
  );
}

export default App;


