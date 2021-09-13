import { Switch,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Signin from './Signin';
function App() {
  return(
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </>
  )
}

export default App;
