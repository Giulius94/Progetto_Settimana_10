import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function ListaSearch({cities}) {

    const navigate = useNavigate()
    


  return (
    <ListGroup className='m-2'>
        {cities.map((e, index)=>
        <ListGroup.Item  key={index} onClick={()=> navigate('/result/'+ e.coord.lon + '/'+e.coord.lat)}>{e.name}</ListGroup.Item>
        )}
    </ListGroup>
  )
}
