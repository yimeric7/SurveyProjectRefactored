import React from 'react';
import NavBarDefault from "../Components/NavBarDefault";
import NavBarUser from "../Components/NavBarUser";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from '../Backend/AuthContext'

export default function HomePage() {
    const { currentUser }  = useAuth()

    return (
        <>
            {currentUser ? (
                <>
                    <NavBarUser />
                    <Box component="main" sx={{ p: 3 }}>
                        <div style={{height: "1000px", margin: "100px"}}>
                            <p style={{lineHeight: 2.0, fontSize: '20px', textAlign: 'center'}}>
                                <div style={{display: 'inline-block', textAlign: 'left'}}>
                                    <strong style={{lineHeight: 2.0, fontSize: '35px'}}>
                                        Find out your Personality Type!
                                    </strong>
                                    <br></br>
                                    Start survey here
                                    <br></br>
                                    To get started, click <Link to="/survey">here</Link>
                                </div>
                            </p>
                        </div>
                    </Box>
                </>
            ) : (
                <>
                    <NavBarDefault />
                    <Box component="main" sx={{ p: 3 }}>
                        <div style={{height: "1000px", margin: "100px"}}>
                            <p style={{lineHeight: 2.0, fontSize: '20px', textAlign: 'center'}}>
                                <div style={{display: 'inline-block', textAlign: 'left'}}>
                                    <strong style={{lineHeight: 2.0, fontSize: '35px'}}>
                                        Find out your Personality Type!
                                    </strong>
                                    <br></br>
                                    Complete the test and get one of 16 possible results.
                                    <br></br>
                                    To get started, click <Link to="/signup">here</Link>
                                </div>
                            </p>
                        </div>
                    </Box>
                </>
            )}
        </>
    )
}