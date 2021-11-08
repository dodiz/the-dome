import React, { useState, useEffect, useContext } from "react"
import authService from "../services/authService"

const AuthContext = React.createContext()

export function useAuth() {
	const currentUser = useContext(AuthContext)
	return currentUser
}

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()

	useEffect(() => {
		const unsubscribe = authService.authListener(user => setCurrentUser(user))

		return () => unsubscribe
	}, [])

	return (
		<AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider