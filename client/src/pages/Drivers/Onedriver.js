import React from 'react'
import { useDispatch } from "react-redux";
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteDriver, toggleTrue, getDriver} from '../../redux/actions/driver';
import { Link } from 'react-router-dom'
import { Fragment } from 'react';
const Onedriver = ({r}) => {
  const dispatch = useDispatch()
  
    return (
      
        <div>
    
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://thumbnail.imgbin.com/14/18/3/imgbin-airport-bus-chauffeur-car-rental-taxi-transport-taxi-jMdwLzzswE6r7hzS9qVBuvPs3_t.jpg'
          
        
        />
        
        <Card.Header>{r.name}</Card.Header>
        <Card.Meta>{r.email}</Card.Meta>
        <Card.Header>{r.vehicule.map((el) => el.Brand)}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button inverted color='green'   onClick={() => {dispatch( getDriver(r._id));dispatch(toggleTrue())}}>
           <Link to= {`/editdriver/${r._id}` }> <Fragment style= {{fontSize: 15, textAlign:'justify'}}>modifier</Fragment> </Link>
          </Button>
          <Button inverted color='red'  onClick={() => dispatch( deleteDriver(r._id))}>
            supprimer
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  
        </div>
    )
}

export default Onedriver
