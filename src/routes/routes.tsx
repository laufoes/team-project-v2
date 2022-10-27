import Form from 'pages/Form';
import SuccessPage from 'pages/SuccessPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={ <Form /> } />
                <Route path='/success' element={ <SuccessPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router