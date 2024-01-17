import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import ResultComponent from '../components/ResultComponent';

export default function ResultPage() {

  const { lon, lat } = useParams();
  const [datiMeteo, setDatiMeteo] = useState({});
  const [icon, setIcon] = useState()


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
      <ResultComponent datiMeteo={datiMeteo} icon={icon} />
    </>
  )
}

