import React from 'react'
import useBottles from '../hooks/useBottles'

interface SwitchableBottlesProps {
    numBottles:number
}

function SwitchableBottles({numBottles}:SwitchableBottlesProps) {
    const Bottles = useBottles({numBottles})
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div></div>
    </div>
  )
}

export default SwitchableBottles