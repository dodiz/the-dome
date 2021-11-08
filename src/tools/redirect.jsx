import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../context/authContext"

export function ProtectedRoute({ component: Component, ...rest }) {
	const user = useAuth()
	return (
		<Route
			{...rest}
			render={props =>
				user && user.emailVerified ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	)
}
export function IsUserRedirect({ component: Component, ...rest }) {
	const user = useAuth()
	return (
		<Route
			{...rest}
			render={props =>
				user && user.emailVerified ? (
					<Redirect to="/land" />
				) : (
					<Component {...props} />
				)
			}
		/>
	)
}
