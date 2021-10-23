import React from 'react'

import {  Card, Image } from 'semantic-ui-react'



const Onecar = ({ n }) => {
  
  return (
    <div>
     
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://www.redbookinspect.com.au/images/vehicles/illust-type-car.svg"
          />

          <Card.Header>{n.Brand}</Card.Header>
          <Card.Header>{n.drived_by.map((el) => el.name)}</Card.Header>

          <Card.Meta>{n.reference}</Card.Meta>
        </Card.Content>
       
      </Card>
    </div>
  )
}

export default Onecar
