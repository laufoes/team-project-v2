import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Form page</h1>
        <button onClick={() => navigate('/success')}>Success page</button>
    </>
  )
}

export default Form
