import React from 'react'
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>!!! Success page !!!</h1>
            <button onClick={() => navigate('/')}>Form page</button>
        </>
    )
}

export default SuccessPage
