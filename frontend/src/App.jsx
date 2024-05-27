import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cartpage from "./pages/cartpage";
import Homepage from './pages/homepage';
import PaymentMethodd from './pages/paymentMethodd=';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cartpage" element={<Cartpage />} />
                    <Route path="/paymentmethod" element={<PaymentMethodd/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
