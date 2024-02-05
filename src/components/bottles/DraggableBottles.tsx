import React, { useEffect, useState } from 'react'
import { BottleModel } from '../../models/bottle';
import useBottles from '../../hooks/useBottles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import VictoryDialog from './VictoryDialog';

interface DraggableBottlesProps {
    numBottles:number
}

function DraggableBottles({numBottles}:DraggableBottlesProps) {
    const Bottles = useBottles({numBottles})
    
    const handleDragDrop = (results:any) => {
        const {source, destination} = results

        if (!destination) return

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return

        if (results.type === 'group') {
            const reorderedBottles = [...Bottles.bottles]
            const sourceIndex = source.index
            const destinationIndex = destination.index

            const [removedBottle] = reorderedBottles.splice(sourceIndex, 1)
            reorderedBottles.splice(destinationIndex, 0, removedBottle)

            return Bottles.setBottels(reorderedBottles)
        }
    }
    useEffect(() => {
        Bottles.checkMatches()
    }, [handleDragDrop])

  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <p style={{fontSize:'24px'}}>Matches: {Bottles.matches}</p>
        <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId='ROOT' type='group' direction='horizontal'>
                {(provided) => (
                    <div style={{display:'flex', gap:'15px', flexDirection:'row'}} {...provided.droppableProps} ref={provided.innerRef}>
                        {Bottles.bottles.map((bottle, index) => (
                            <Draggable draggableId={String(bottle._id)} key={bottle._id} index={index}>
                                {(provided) => {
                                    return (
                                        <div 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                width:'100px',
                                                height:'100px',
                                                border:'2px solid black',
                                                backgroundColor:bottle.color,
                                                display:'flex',
                                                justifyContent:'center',
                                                alignItems:'center',
                                                color:bottle.isWhiteFont? 'white' : 'black'
                                            }}
                                        >
                                            {bottle.order}
                                        </div>
                                    )
                                }}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        <p style={{fontSize:'24px'}}>Original:</p>
        {Bottles.surrender?
            <>
            <button onClick={Bottles.retry}>retry</button>
            <div style={{display:'flex', gap:'15px', flexDirection:'row'}}>
                {Bottles.trueOrder.map((bottle) => {
                    return (
                        <div
                        key={`original${bottle._id}`}
                        style={{
                                width:'100px',
                                height:'100px',
                                border:'2px solid black',
                                backgroundColor:bottle.color,
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                color:bottle.isWhiteFont? 'white' : 'black'
                            }}
                        >
                            {bottle.order}
                        </div>
                    )
                })}
            </div>
            </>
        :
        <button onClick={() => Bottles.setSurrender(true)}>Surrender</button>
        }

        <VictoryDialog
            isOpen={Bottles.isVictory}
            onRequestClose={Bottles.retry}
        />
    </div>
  )
}

export default DraggableBottles