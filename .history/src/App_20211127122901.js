
import { Button } from '@mui/material';
import './App.css';
import UnstyledButtonCustom from './components/Button/UnstyledButtonCustom';
import CustomizedSwitches from './components/Switch/CustomizedSwitches';
import UseInput from './components/TextField/UseInput';

function App() {
  return (
    <div className="App">
      <Button variant="contained" >
Login
      </Button>
      <UnstyledButtonCustom></UnstyledButtonCustom>
      <CustomizedSwitches></CustomizedSwitches>
      <UseInput></UseInput>
     Learn Reacthttps://javhay.pro/heyzo-1897/
    </div>
  );
}

export default App;


