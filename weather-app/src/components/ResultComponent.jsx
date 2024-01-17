import React from 'react'
import { Button, Container,Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ResultComponent({datiMeteo, icon}) {
    const navigate = useNavigate()
  return (
    <>
    <Button className='ms-5' variant="primary" type='button' onClick={() => navigate('/')}><i className="bi bi-caret-left-fill"></i> HomePage</Button>
      <Container>
          <div className='d-flex justify-content-center'>
            {icon && <img alt='icon' src={icon}></img>}
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Città</th>
                <th>Meteo</th>
                <th>Temperatura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{datiMeteo.name}</td>
                <td>{datiMeteo.weather && datiMeteo.weather[0].description}</td>
                <td>{datiMeteo.main && datiMeteo.main.temp.toFixed(1)}&deg;</td>
              </tr>
            </tbody>
          </Table>
      </Container>
      </>
  )
}
