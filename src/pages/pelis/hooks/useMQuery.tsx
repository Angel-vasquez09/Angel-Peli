import React, { useState } from 'react'

export const useMQuery = (initialQuery: string) => {

    const [ matches, setMatches ] = useState(
        window.matchMedia(initialQuery).matches
    )

    return {
        matches
    }
}
