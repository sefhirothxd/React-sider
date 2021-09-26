import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {Login} from './components/Login';
import {UserNavBar} from './components/user/UserNavBar';
import {AdminNavBar} from './components/admin/AdminNavBar';


function App() {
	return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={UserNavBar} />
          <Route path="/admin" component={AdminNavBar} />
        </Switch>
      </Router>
    </>
	);
}

export default App;
