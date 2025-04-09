import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
} from '@hello-pangea/dnd';

function DragQuestion({ question, selected, onDrop }) {
  const handleDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination || destination.droppableId !== 'answer-box') return;
    onDrop(draggableId);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="answer-box">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              border: '2px dashed #ccc',
              minHeight: '60px',
              padding: '10px',
              background: snapshot.isDraggingOver ? '#e3f2fd' : '#f5f5f5',
              marginBottom: '20px',
            }}
          >
            {selected ? (
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#c8e6c9',
                  textAlign: 'center',
                  borderRadius: '4px',
                }}
              >
                {selected}
              </div>
            ) : (
              'Drag your answer here'
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {question.options
          .filter((opt) => opt !== selected)
          .map((option, index) => (
            <Draggable key={option} draggableId={option} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    cursor: 'grab',
                    ...provided.draggableProps.style,
                  }}
                >
                  {option}
                </div>
              )}
            </Draggable>
          ))}
      </div>
    </DragDropContext>
  );
}

export default DragQuestion;
