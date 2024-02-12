import React from 'react'
import { BottleModel } from '../../models/bottle'

function Bottle({bottle}:{bottle:BottleModel}) {
  return (
    <div style={{
            width:'100px',
            height:'100px',
            border:'2px solid black',
            backgroundColor:bottle.color,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:bottle.isWhiteFont? 'white' : 'black',
            cursor:'pointer',
            boxSizing:'border-box'
        }}
    >
        {bottle.order}
    </div>
  )
}

export default Bottle