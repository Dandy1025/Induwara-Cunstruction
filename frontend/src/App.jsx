import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cartpage from "./pages/cartpage";
import Homepage from './pages/homepage';
import PaymentMethodd from './pages/paymentMethodd=';
import Employee from './pages/Employee';
import Feedback from './pages/Feedback';
import Notification from './pages/Notification';
import AdminReview from './pages/AdminReview';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cartpage" element={<Cartpage />} />
                    <Route path="/paymentmethod" element={<PaymentMethodd/>} />
                    <Route path="/Employee" element={<Employee />} />
                    <Route path="/Feedback" element={<Feedback />} />
                    <Route path="/Notification" element={<Notification />} />
                    <Route path="/AdminReview" element={<AdminReview/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
