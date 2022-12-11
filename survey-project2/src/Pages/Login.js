import React, { useRef, useState } from 'react';
import { useAuth} from '../Backend/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import NavBarDefault from "../Components/NavBarDefault";
import { Container, Button, Form, Card, Alert } from "react-bootstrap";

export default function LoginPage() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError('Failed to login');
        }

        setLoading(false)
    }

    return (
        <>
            <NavBarDefault />
            <div style={{height: "1000px", margin: "100px"}}>
                <Container
                    style={{ minHeight: "100vh", paddingTop: '50px', width: "50%" }}
                >
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} variant="outline-primary" className="w-100 mt-4" type="submit">
                                    Log In
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Container>
            </div>
        </>
    )
}
