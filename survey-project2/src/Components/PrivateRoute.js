import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../Backend/AuthContext"

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth()

    return currentUser ? children : <Navigate to="/" />
}