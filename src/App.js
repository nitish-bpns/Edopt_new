// React imports
import React from 'react';
// Third-party imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// fs imports
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import Contacts from './pages/Contacts';
import fundraisers from './pages/fundraisers';
import start from './pages/Start';
import Booking from './pages/Booking';
import Donor from './pages/Donor';
// students' Profile import
import Diya from './pages/Diya';
import Jatin from './pages/Jatin';
import Priyanshu from './pages/Priyanshu';
import Divyanshu from './pages/Divyanshu';
import Sakshi from './pages/Sakshi';
import Anshu from './pages/Anshu';


function App() {
  return (
    <Router>
      <Switch>

        <Route
          exact path="/"
          component={Home}
        />

        <Route exact path="/fundraisers" component={fundraisers} />
        <Route exact path="/start" component={start} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Donor" component={Donor} />
        {/*  Students' profile route   */}
        <Route exact path="/diya" component={Diya} />
        <Route exact path="/Jatin" component={Jatin} />
        <Route exact path="/Priyanshu" component={Priyanshu} />
        <Route exact path="/Divyanshu" component={Divyanshu} />
        <Route exact path="/Sakshi" component={Sakshi} />
        <Route exact path="/Anshu" component={Anshu} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
