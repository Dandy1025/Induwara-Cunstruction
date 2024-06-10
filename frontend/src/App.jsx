import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import PaymentMethod from './pages/PaymentMethod';
import PaymentWallet from './pages/PaymentWallet';
import Cartpage from './pages/Cartpage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/cartpage' element={<Cartpage/>} />
                    <Route path='/paymentmethod' element={<PaymentMethod/>} />
                    <Route path='/paymentwallet' element={<PaymentWallet/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;