import { Box, chakra, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddButton from "../AddButton/AddButton";
import "./column.css";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <Box
            bg="blue.50"
            p={2}
            my={2}
            borderRadius={4}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h3 className="task_title">{task.title}</h3>
            <hr className="horizontal_rule" />
            <p align="left" className="task_desc">
              {task.content}
            </p>
          </Box>
        );
      }}
    </Draggable>
  );
}

function Column({ tasks, column, addTask, updateColumTitle, index }) {
  const [colTitle, setColTitle] = React.useState("");
  function handleChange(e) {
    setColTitle(e.target.value);
    updateColumTitle(e.target.value, column.id);
  }

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className="task_column"
        >
          <Box p={1} bg="gray.200">
            <Input
              // className="column_title"
              type="text"
              onChange={handleChange}
              value={colTitle || column.title}
            />
          </Box>
          <Droppable droppableId={column.id} type="task">
            {(provided) => {
              return (
                <div
                  className="task_list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          <HStack my={2}>
            <chakra.span ml="1rem"> Add a task</chakra.span>
            <AddButton column={column} addTask={addTask} />
          </HStack>
        </Box>
      )}
    </Draggable>
  );
}

export default Column;

// </div>
