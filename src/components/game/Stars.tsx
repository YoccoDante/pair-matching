import React, { useEffect, useState } from 'react'
import StartIcon from '../icons/StartIcon'

function Stars({numStars}:{numStars:number}) {
    const [stars, setStars] = useState<any[]>([])
    useEffect(() => {
        const newStars = new Array(3).fill(null)
        setStars(newStars)
    },[numStars])
  return (
    <div>
        {stars.map((star, index) => {
            const isCompleted = index < numStars
            return <StartIcon isTransparent={!isCompleted} key={`star-icon-${index}`}/>
        })}
    </div>
  )
}

export default Stars