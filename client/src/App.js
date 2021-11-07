import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from './router/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import Errors from './pages/Errors/Errors'
import Landpage from './pages/Landpage/Landpage'
import Login from './pages/Login/Login'
import Kiloetconso from './pages/Kiloetconso/Kiloetconso'
import Profile from './pages/Profile/Profile'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { current } from './redux/actions/driver'

import Alldrivers from './pages/Drivers/Alldrivers'
import Adddriver from './pages/Drivers/Adddriver'
import Admindash from './pages/Admindash/Admindash'
import Allcars from './pages/Cars/Allcars'
import Addcars from './pages/Cars/Addcars'
import Add from './pages/Drivers/Add'
import Addc from './pages/Cars/Addc'
import Editprofile from './pages/Editprofile'
import Editkiloetconso from './pages/Kiloetconso/Editkiloetconso'
import Cookies from 'js-cookie'
function App() {
  const dispatch = useDispatch()
 const readcookie = () => {
   const driver = Cookies.get ("driver")
   if (driver) {
     dispatch(current())
   }
 }
 
 useEffect(() => {
  readcookie();        
 })
 
 
 
  useEffect(() => {
    dispatch(current())
  }, [dispatch])
  
  
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path= "/alldrivers" component={Alldrivers} /> 

        <PrivateRoute path="/adddriver" component={Adddriver} />
        <PrivateRoute path={['/add', '/editdriver/:id']} component={Add} />
        <PrivateRoute path="/editdriverrr/:id" component={Editprofile} />
        <PrivateRoute path="/admindash" component={Admindash} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/kiloetconso" component={Kiloetconso} />
        <PrivateRoute path="/editkiloetconso/:id" component={Editkiloetconso} />
        <Route path="/allcars" component={Allcars} />
        <PrivateRoute path="/addcars" component={Addcars} />
        <PrivateRoute path={['/addc', '/editcar/:id']} component={Addc} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  )
}

export default App
