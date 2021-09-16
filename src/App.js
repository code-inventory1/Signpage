import { Switch,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Signin from './Signin';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./Styles/style.scss";

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
