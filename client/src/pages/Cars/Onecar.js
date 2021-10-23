import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import { toggleTrue } from '../../redux/actions/driver'
import { Link } from 'react-router-dom'
import { deleteCar, getCar } from '../../redux/actions/car'
const Onecar = ({ r }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {console.log(r)}
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://www.redbookinspect.com.au/images/vehicles/illust-type-car.svg"
          />

          <Card.Header>{r.Brand}</Card.Header>
          <Card.Header>{r.drived_by.map((el) => el.name)}</Card.Header>

          <Card.Meta>{r.reference}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              inverted
              color="green"
              onClick={() => {
                dispatch(getCar(r._id))
                dispatch(toggleTrue())
              }}
            >
              <Link to={`/editcar/${r._id}`}> modifier </Link>
            </Button>
            <Button
              inverted
              color="red"
              onClick={() => dispatch(deleteCar(r._id))}
            >
              supprimer
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Onecar
