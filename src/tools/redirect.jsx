import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../context/authContext"

export function ProtectedRoute(props) {
	const user = useAuth()
	return user && user.emailVerified ? <Route {...props} /> : <Redirect to="/" />
}
export function IsUserRedirect(props) {
	const user = useAuth()
	return user && user.emailVerified ? (
		<Redirect to="/land" />
	) : (
		<Route {...props} />
	)
}
