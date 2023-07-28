import { Switch,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Signin from './sign-In-page/Signin';
function App() {
  return(
    <>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin} />
      </Switch>
      </Provider>
    </>
  )
}

export default App;
