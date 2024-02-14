interface MovesCounterProps {
  movesLeft:number;
  size:string
}

function MovesCounter({movesLeft, size}:MovesCounterProps) {
  const color = movesLeft === 0 ? 'red' : 'grey';

  return (
    <div style={{color:color, fontSize:size, margin:0, padding:0}}>Moves left: {movesLeft}</div>
  )
}

export default MovesCounter