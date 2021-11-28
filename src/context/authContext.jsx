import React, { useState, useEffect, useContext } from "react"
import { authListener } from "../services/authService"

export const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const unsubscribe = authListener(user => {
			setCurrentUser(user)
			if (!loading) setLoading(true)
		})
		return () => unsubscribe()
	}, [])

	return (
		loading && (
			<AuthContext.Provider value={currentUser}>
				{children}
			</AuthContext.Provider>
		)
	)
}

export default AuthProvider
