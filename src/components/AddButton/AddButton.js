import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import "react-responsive-modal/styles.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function AddButton({ column, addTask }) {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDesc, setTaskDesc] = React.useState("");

  function handleClick() {
    addTask(column, taskTitle, taskDesc);
  }
  function handleChange(e, type) {
    if (type === "title") {
      setTaskTitle(e.target.value);
    } else {
      setTaskDesc(e.target.value);
    }
  }

  return (
    <Popup
      trigger={
        <button className="add_task_btn" onClick={handleClick}>
          +
        </button>
      }
      modal
    >
      {(close) => (
        <Box p={5}>
          <Heading mx="auto" textAlign="center" fontSize="24px">Add a new task</Heading>
          <Input
            my={2}
            type="text"
            placeholder="Enter Task Title"
            onChange={(e) => {
              handleChange(e, "title");
            }}
            value={taskTitle}
          />
          <Textarea
            my={2}
            rows={5}
            cols={30}
            placeholder="Enter Task Description"
            onChange={(e) => {
              handleChange(e, "desc");
            }}
            value={taskDesc}
          />
          <HStack>
            <Button
              mx="auto"
              onClick={() => {
                handleClick();
                close();
              }}
              w="10rem"
            >
              Create Task
            </Button>
          </HStack>
        </Box>
      )}
    </Popup>
  );
}

export default AddButton;
