
import Login from './SignIn';
import SignUp from './SingUp';

import Global from './global';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Global/>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={SignUp}/>

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
