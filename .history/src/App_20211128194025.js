
import * as React from 'react'
import { Switch } from 'react-router-dom';
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


