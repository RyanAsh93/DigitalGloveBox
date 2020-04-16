import React from 'react';
import {Switch, Route} from 'react-router-dom'
// import { Background } from 'semantic-ui-react';
import './App.css';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './components/NoMatch';
import CarProfile from './components/cars/CarProfile'
import Account from './components/users/Account'
import EditCarProfile from './components/cars/EditCarProfile';
import AddCar from './components/cars/AddCar';
import DocumentUpload from './components/docs/DocumentUpload';
import carApi from './components/cars/CarApi'
import TestNav from './components/TestNav';
import Background from './components/Background';
import Footer from './components/Footer';


const App = () => {
  
  return (
   <>
    <FetchUser>
      <TestNav />
      <Background />
        <div style={{padding: '0 25%', paddingTop: '2em'}}>
          <Switch>
            <ProtectedRoute exact path="/" component={Dashboard} />
            <ProtectedRoute exact path='/account' component={Account}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/car_profile/:id/documents' component={DocumentUpload}/>
            <Route exact path='/car_profile/:id' component={CarProfile}/>
            <Route exact path='/add_car' component={AddCar}/>            
            <Route exact path='/:user_id/car_profile/:id/edit' component={EditCarProfile}/>            
            <Route exact path='/CarApi' component={carApi}/>                                
            <Route component={NoMatch}/>
          </Switch>     
        </div>
      <Footer />
    </FetchUser>
   </>
  );
};

export default App;
