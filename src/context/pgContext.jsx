import React, { useState, useEffect, useContext } from "react"
import pgService from "../services/pgService"

export const PgContext = React.createContext()

export function usePg() {
	const currentPg = useContext(PgContext)
	return currentPg
}

function PgProvider({ children }) {
	const [currentPg, setCurrentPg] = useState(null)

	useEffect(() => {
		const unsubscribe = pgService.pgListener(pg => setCurrentPg(pg))

		return () => unsubscribe
	}, [])

	return <PgContext.Provider value={currentPg}>{children}</PgContext.Provider>
}

export default PgProvider
