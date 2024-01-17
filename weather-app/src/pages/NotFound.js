import React from 'react'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <>
     <Button variant="info" className='ms-5'onClick={()=>navigate('/')}><i className="bi bi-caret-left-fill"></i>Back Home</Button>
    <div className='d-flex justify-content-center'>
    <img src="./img/shutterstock_774749455.jpg" alt="not found" className='w-50'/>
    </div>
    </>
  )
}


