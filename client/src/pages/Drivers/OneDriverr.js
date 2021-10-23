import React from 'react'

import { Card, Image } from 'semantic-ui-react'


const Onedriver = ({rr}) => {
  
  
    return (
      
        <div>
    
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://thumbnail.imgbin.com/14/18/3/imgbin-airport-bus-chauffeur-car-rental-taxi-transport-taxi-jMdwLzzswE6r7hzS9qVBuvPs3_t.jpg'
          
        
        />
        
        <Card.Header>{rr.name}</Card.Header>
        <Card.Meta>{rr.email}</Card.Meta>
        <Card.Header>{rr.vehicule.map((el) => el.Brand)}</Card.Header>
      </Card.Content>
     
    </Card>
    
  
        </div>
    )
}

export default Onedriver
