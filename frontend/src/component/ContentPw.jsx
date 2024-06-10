import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/contentPWstyle.css';

const initialUsers = [
    { id: 1, name: 'W.S. Wickramasinghe', regFee: 'Rs.7500.00', salary: 'Rs.150000.00' },
    { id: 2, name: 'K.R. Chandrapala', regFee: 'Rs.6500.00', salary: 'Rs.130000.00' },
    { id: 3, name: 'J. Kasun De Silva', regFee: 'Rs.8500.00', salary: 'Rs.170000.00' },
    { id: 4, name: 'W.M. Rathnayaka', regFee: 'Rs.8000.00', salary: 'Rs.160000.00' },
];

function ContentPw() {
    const [Users, setUsers] = useState(initialUsers);
    const [totalRegFee, setTotalRegFee] = useState(0);
    const [totalSalary, setTotalSalary] = useState(0);

    useEffect(() => {
        const totalRegFeeCalc = Users.reduce((acc, user) => acc + parseFloat(user.regFee.replace('Rs.', '').replace(',', '')), 0);
        const totalSalaryCalc = Users.reduce((acc, user) => acc + parseFloat(user.salary.replace('Rs.', '').replace(',', '')), 0);

        setTotalRegFee(totalRegFeeCalc);
        setTotalSalary(totalSalaryCalc);
    }, [Users]);

    return (
        <div className='pwBg'>
            <Container fluid style={{ maxWidth: '80%', marginTop: '20px' }}>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center fw-bold">Employee Name</Col>
                    <Col className="text-center fw-bold">Registration Fee</Col>
                    <Col className="text-center fw-bold">Salary</Col>
                    <hr className='hr-line' />

                </Row>
                {Users.map(user => (
                    <Row key={user.id} className="justify-content-center mb-4">
                        <Col className="text-center">{user.name}</Col>
                        <Col className="text-center">{user.regFee}</Col>
                        <Col className="text-center">{user.salary}</Col>
                        <hr className='hr-line' />

                    </Row>
                ))}
                <Row className="justify-content-center fw-bold">
                    <Col className="text-end">Grand Total :</Col>
                    <Col className="text-center">Rs.{totalRegFee.toFixed(2)}</Col>
                    <Col className="text-center">Rs.{totalSalary.toFixed(2)}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContentPw;
