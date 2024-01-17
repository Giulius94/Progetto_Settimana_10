import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Container, Table } from 'react-bootstrap';

export default function ResultPage() {

  const { lon, lat } = useParams();
  const [datiMeteo, setDatiMeteo] = useState({});
  const [icon, setIcon] = useState()
  const navigate = useNavigate()


  useEffect(() => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?appid=e91513d78476fc1a769fed09508ca808&lang=it&units=metric'
    axios(url + '&lon=' + lon + '&lat=' + lat).then((response) => {
      setDatiMeteo(response.data)
      setIcon('http://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@4x.png')
    })
      .catch(function (error) {
        console.log(error);
      })

  }, [lon, lat])


  return (
    <>
      <Button className='ms-5' variant="primary" type='button' onClick={() => navigate('/')}><i class="bi bi-caret-left-fill"></i> HomePage</Button>
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

