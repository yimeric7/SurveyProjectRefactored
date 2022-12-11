import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBarUser from "../Components/NavBarUser";
import { ref, onValue } from "firebase/database";
import { db } from "../Backend/Firebase";
import { Link } from 'react-router-dom'
import Result from '../Components/DisplayResults'
import { Box } from "@mui/material";
import { useAuth } from '../Backend/AuthContext'

export default function ProfilePage() {
    const { currentUser } = useAuth();
    const [results, setResults] = useState([])

    useEffect(() => {
        try {
            onValue(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), (snapshot) => {
                setResults(snapshot.val())
            });
        } catch (e) {
            console.log(e)
        }
    }, [currentUser])

    const allResults = Object.keys(results).map((key) => [key, results[key]])
    return (
        <>
            <NavBarUser />
            <Box component="main" sx={{ p: 3 }}>
                <div style={{height: "1000px", margin: "100px"}}>
                    <p style={{lineHeight: 2.0, fontSize: '20px', textAlign: 'left'}}>
                        <Container>
                            <section style={{ position: 'relative' }}>
                                <h1>
                                    Profile:
                                </h1>
                                <strong>Email:</strong> {currentUser.email}
                            </section>
                            <section style={{ position: 'relative'}}>
                                <h2>
                                    Results:
                                 </h2>
                                {results ? (
                                    <div>
                                        {allResults.map(result => {
                                            return <Result key={allResults} result={result[1]} />
                                        })}
                                    </div>
                                ) : (
                                    <>
                                        <div> You haven't taken any surveys yet! Click
                                            <> </>
                                            <Link to="/survey">
                                                here
                                            </Link>
                                            <> </>
                                            to get started
                                        </div>
                                    </>

                                )}
                            </section>
                        </Container>
                    </p>
                </div>
            </Box>
        </>
    )
}