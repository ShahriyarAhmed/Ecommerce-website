import './App.css'
import Header from './Header'
import Header2 from './Header2'
import Home from './Home'
import Home2 from './Home2'
import Checkout from './Checkout'
import Adminadd from './adminadd'
import Supplierlogin from './Supplierlogin'
import Search from './search'
import Login from './Login'
import Supplieradd from './supplier add'
import Register from './Register';
//import Registersup from './RegisterSup'
import Bill from './bill'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Registersup from './RegisterSup'
import Adminlogin from './Adminlogin'

function App() {
  return (
    // BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/RegisterSup">
          <Registersup />
        </Route>
        <Route path="/Supplierlogin">
          <Supplierlogin />
        </Route>
        <Route path="/Supplierlogin">
          <Supplierlogin />
        </Route>
        <Route path="/Adminlogin">
          <Adminlogin />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Supplieradd">
          <Supplieradd />
        </Route>
        <Route path="/adminadd">
          <Adminadd />
        </Route>
        <Route path="/Bill">
          <Bill />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/Header">
          <Header />
        </Route>
        <Route path="/Home2">
          <Home2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
