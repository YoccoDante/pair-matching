import React, { useEffect } from 'react'
import Bottle from './bottle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useBottlesContext } from '../../contexts/BottleContext';

function DraggableBottles() {
    const {bottles,setBottles, handleDiscountMove} = useBottlesContext()
    const handleDragDrop = (results:any) => {
        const {source, destination} = results

        if (!destination) return

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return

        if (results.type === 'group') {
            const reorderedBottles = [...bottles]
            const sourceIndex = source.index
            const destinationIndex = destination.index

            const [removedBottle] = reorderedBottles.splice(sourceIndex, 1)
            reorderedBottles.splice(destinationIndex, 0, removedBottle)

            setBottles(reorderedBottles)
            handleDiscountMove()
        }
    }

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId='ROOT' type='group' direction='horizontal'>
            {(provided) => (
                <div style={{display:'flex', gap:'15px', flexDirection:'row'}} {...provided.droppableProps} ref={provided.innerRef}>
                    {bottles.map((bottle, index) => (
                        <Draggable draggableId={String(bottle._id)} key={bottle._id} index={index}>
                            {(provided) => {
                                return (
                                    <div 
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Bottle bottle={bottle}/>
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
  )
}

export default DraggableBottles