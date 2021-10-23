import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Button} from 'semantic-ui-react'
import Cookies from 'js-cookie'
import './Profile.css'
import { current, getDriver, toggleTrue } from '../../redux/actions/driver'
const Profile = () => {
  const driver = useSelector((state) => state.driverReducer.driver)
  const driverr = useSelector((state) => state.driverReducer.driverr)
  const dispatch = useDispatch()
   const readcookie = () => {
   const driver = Cookies.get ("driver")
   if (driver) {
     dispatch(current())
   }
 }
 
 useEffect(() => {
  readcookie();        
 }, [])
  return (
    <div className="row py-5 px-4">
      <div className="col-xl-4 col-md-6 col-sm-10 mx-auto">
        {/* Profile widget */}
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 bg-dark">
            <div className="media align-items-end profile-header">
              <div className="profile mr-3">
                <img
                  src="https://thumbnail.imgbin.com/14/18/3/imgbin-airport-bus-chauffeur-car-rental-taxi-transport-taxi-jMdwLzzswE6r7hzS9qVBuvPs3_t.jpg"
                  alt="..."
                  width={130}
                  className="rounded mb-2 img-thumbnail"
                />
                <Button className="btn btn-dark btn-sm btn-block" onClick={() => {dispatch( getDriver(driver._id));dispatch(toggleTrue())}}>
                 <Link to={`/editdriverrr/${driverr._id}`}> Modifier profile </Link>
                </Button>
              </div>
              <div className="media-body mb-5 text-white">
                <h4 className="mt-0 mb-0"> {driver && driver.name}</h4>
                <p className="small mb-4">
                  {' '}
                  <i className="fa fa-envelope-open-o" aria-hidden="true">
                    {driver && driver.email}{' '}
                  </i>
                  <i className="fa fa-envelope-open-o" aria-hidden="true">
                    {driver && driver.vehicule}{' '}
                  </i>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0"></ul>
          </div>
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <a href="#" className="btn btn-dark btn-sm btn-block">
                <Link to="kiloetconso">kilometrage consommation</Link>
              </a>
            </div>
            <div className="row"></div>
            <div className="py-4">
              <div className="p-4 bg-light rounded shadow-sm">
                <p className="font-italic mb-0">
                  vous pouvez gerer votre vehicule et inserer les informations
                  necessaires. En cas de probleme technique veuillez contacter
                  l'agent responsable de la gestion du park. Merci !
                </p>
                <ul className="list-inline small text-muted mt-3 mb-0">
                  <li className="list-inline-item">
                    <i className="fa fa-comment-o mr-2" />
                    <h1 style={{ textAlign: 'center' }}>
                      heureux de vous revoir {driver && driver.name}
                      
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
