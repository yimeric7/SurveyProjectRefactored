import NavBarUser from "../Components/NavBarUser";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from '../Backend/AuthContext'
import { useLocation } from "react-router";
import { calculateAnswers } from "../Backend/SurveyCalculation";
import { Container, Card } from "react-bootstrap";

export default function ResultPage() {
    const { currentUser } = useAuth()
    const [mind, setMind] = useState("")
    const [energy, setEnergy] = useState("")
    const [nature, setNature] = useState("")
    const [tactics, setTactics] = useState('')
    const answers = useLocation()

    console.log(answers.state)
    useEffect(() => {
        const personalityTypes = calculateAnswers(answers.state)
        setMind(personalityTypes[0])
        setEnergy(personalityTypes[1])
        setNature(personalityTypes[2])
        setTactics(personalityTypes[3])
    }, [currentUser])

    return (
        <>
            <NavBarUser />
            <Box component="main" sx={{ p: 3 }}>
                <div style={{height: "1000px", margin: "100px"}}>
                    <h1 align="center" style={{fontSize:'100px'}}>RESULTS</h1>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "45vh", fontSize: '30px' }}
                    >
                    <span className="w-100" style={{ maxWidth: '400px', backgroundColor: '#F5FFFA', textAlign: "center"}}>
                        <Card>
                            {mind==="Introverted" ? (
                                <Card.Body>
                                    <h1>Introverted</h1>
                                    <p>prefer solitary activities,
                                        think before speaking, get
                                        exhausted by social interaction.</p>
                                </Card.Body>
                            ) : (
                                <Card.Body>
                                    <h1>Extraverted</h1>
                                    <p>
                                        prefer group activities, think while
                                        speaking, get energized
                                        by social interaction.
                                    </p>
                                </Card.Body>
                            )}
                        </Card>
                    </span>

                        <span className="w-100" style={{ maxWidth: '400px', backgroundColor: '#F5FFFA', textAlign: "center"}}>
                        <Card>
                            {energy==="Intuitive" ? (
                                <Card.Body>
                                    <h1>Intuitive</h1>
                                    <p>imaginative, rely on their intuition,
                                        absorbed in ideas, focus
                                        on what might happen.</p>
                                </Card.Body>
                            ) : (
                                <Card.Body>
                                    <h1>Sensing</h1>
                                    <p>
                                        down-to-earth, rely on their senses,
                                        absorbed in practical
                                        matters, focus on what has happened.
                                    </p>
                                </Card.Body>
                            )}
                        </Card>
                    </span>

                        <span className="w-100" style={{ maxWidth: '400px', backgroundColor: '#F5FFFA', textAlign: "center"}}>
                        <Card>
                            {nature==="Feeling" ? (
                                <Card.Body>
                                    <h1>Feeling</h1>
                                    <p>sensitive, follow their hearts, focus on harmony and
                                        cooperation.</p>
                                </Card.Body>
                            ) : (
                                <Card.Body>
                                    <h1>Thinking</h1>
                                    <p>
                                        tough, follow their minds, focus on objectivity and rationality.
                                    </p>
                                </Card.Body>
                            )}
                        </Card>
                    </span>

                        <span className="w-100" style={{ maxWidth: '400px', backgroundColor: '#F5FFFA', textAlign: "center"}}>
                        <Card>
                            {tactics==="Judging" ? (
                                <Card.Body>
                                    <h1>Judging</h1>
                                    <p>decisive, prefer clear rules and guidelines, see deadlines as
                                        sacred, seek closure.</p>
                                </Card.Body>
                            ) : (
                                <Card.Body>
                                    <h1>Perceiving</h1>
                                    <p>
                                        very good at improvising, prefer keeping their options open,
                                        relaxed about their work, seek freedom.
                                    </p>
                                </Card.Body>
                            )}
                        </Card>
                    </span>
                    </Container>
                </div>
            </Box>
        </>
    )
}