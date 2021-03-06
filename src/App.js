import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AuthProvider from './firebase/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingForm from './components/BookingForm/BookingForm';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import AddOffer from './components/AddOffer/AddOffer';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/bookingform/:id">
              <BookingForm></BookingForm>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
