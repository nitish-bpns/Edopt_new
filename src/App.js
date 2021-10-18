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
import Owiz from './pages/Owiz';
import Awaiz from './pages/Awaiz';
import Syed from './pages/Syed';
import Ranjith from './pages/Ranjith';
import Ritesh from './pages/Ritesh';
import Aradhay from './pages/Aradhay';
import Bhavya from './pages/Bhavya';
import Rohit from './pages/Rohit';
import Roopam from './pages/Roopam';



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
        <Route exact path="/Owiz" component={Owiz} />
        <Route exact path="/Awaiz" component={Awaiz} />
        <Route exact path="/Syed" component={Syed} />
        <Route exact path="/Ranjith" component={Ranjith} />
        <Route exact path="/Ritesh" component={Ritesh} />
        <Route exact path="/Aradhay" component={Aradhay} />
        <Route exact path="/Bhavya" component={Bhavya} />
        <Route exact path="/Rohit" component={Rohit} />
        <Route exact path="/Roopam" component={Roopam} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
