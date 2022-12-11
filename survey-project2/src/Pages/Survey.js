import React, {useEffect, useState} from 'react';
import NavBarUser from "../Components/NavBarUser";
import {Alert, Box, Button, Card} from "@mui/material";
import { navigate, useNavigate} from "react-router-dom";
import { useAuth } from '../Backend/AuthContext';
import { db } from "../Backend/Firebase";
import { ref, onValue, push } from "firebase/database";
import Question from '../Components/Question';
import {Container} from "react-bootstrap";

export default function SurveyPage() {
    const { currentUser } = useAuth()
    const [survey, setSurvey] = useState([])
    const [answers, setAnswers] = useState(new Map())
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (id, value) => {
        setAnswers(answers.set(id, value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const finalAnswers = Array.from(answers).sort((a,b) => a[0]-b[0]);

        if (answers.size === survey.length) {
            try {
                push(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), {
                    results: finalAnswers
                });
            } catch (e) {
                console.log(e)
            } finally {
                navigate('/results', {state: finalAnswers})
            }
        }
        else
            setError('Answer all questions to get results!')
    }

    useEffect(() => {
        onValue(ref(db, "questions/-NGKwFQE0JcvPUOJ_7Ij"), (snapshot) => {
            setSurvey(snapshot.val())
        });
    }, [])


    return (
        <>
            <NavBarUser />
            <Box component="main" sx={{ p: 3 }}>
                <div style={{height: "3000px", margin: "100px"}}>
                    <p style={{lineHeight: 2.0, fontSize: '20px', textAlign: 'center'}}>
                        <div style={{display: 'inline-block', textAlign: 'left'}}>
                            <strong style={{lineHeight: 2.0, fontSize: '35px', textAlign: 'center'}}>
                                Survey
                            </strong>
                            <Container
                                className="d-flex align-items-center justify-content-center"
                                style={{ minHeight: "100vh" }}
                            >
                                <Card className="w-100" style={{maxWidth: '1000px', alignItems: 'center' }}>
                                    <div className="w-100"  style={{ maxWidth: '800px', textAlign: 'center' }}>
                                        {survey?.map(question => {
                                            return <Question options={question.options} question={question.question} id={question.id} handleChange={handleChange} key={question.id} />
                                        })}
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        {error && <Alert variant="danger">{error}</Alert>}
                                        <br></br>
                                        <Button onClick={handleSubmit} type="submit">SHOW RESULTS</Button>
                                    </div>
                                </Card>
                            </Container>
                        </div>
                    </p>
                </div>
            </Box>
        </>
    )
}