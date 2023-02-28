import { Box, Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addNote, changeActiveColor } from "../redux/NoteReducer";
import { CheckIcon } from "@chakra-ui/icons";

function Note() {
  const [note, setNote] = useState("");
  const activeColor = useSelector((state) => state.notes.activeColor);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const toast = useToast();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      toast({
        title: "Error",
        description: "Please enter a note.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(addNote(note, activeColor));
    setNote("");
    toast({
      title: "Note Added.",
      description: "You added a note to your list successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    console.log(notes);
  };

  return (
    <Box bg="white" p="3" rounded="xl" w="100%" boxShadow="lg">
      <form onSubmit={handelSubmit}>
        <Textarea
          value={note}
          fontWeight="300"
          w="100%"
          h="160px"
          bg={activeColor}
          placeholder="Enter your note here"
          resize="none"
          border="0"
          focusBorderColor="none"
          spellCheck="false"
          onChange={(e) => setNote(e.target.value)}
          color={activeColor === "blue" ? "white" : "black"}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px="16px"
          py="12px"
          fontSize="md"
        >
          <div>
            <Button
              colorScheme="whatsapp"
              borderRadius="100%"
              size="sm"
              mr="1"
              p="0"
              onClick={() => dispatch(changeActiveColor("green"))}
            >
              {activeColor === "green" ? <CheckIcon /> : ""}
            </Button>
            <Button
              onClick={() => dispatch(changeActiveColor("blue"))}
              colorScheme="linkedin"
              borderRadius="100%"
              size="sm"
              mr="1"
              p="0"
            >
              {activeColor === "blue" ? <CheckIcon /> : ""}
            </Button>
            <Button
              onClick={() => dispatch(changeActiveColor("yellow"))}
              colorScheme="yellow"
              color="white"
              borderRadius="100%"
              size="sm"
              mr="1"
              p="0"
            >
              {activeColor === "yellow" ? <CheckIcon /> : ""}
            </Button>
            <Button
              onClick={() => dispatch(changeActiveColor("purple"))}
              colorScheme="purple"
              borderRadius="100%"
              size="sm"
              mr="1"
              p="0"
            >
              {activeColor === "purple" ? <CheckIcon /> : ""}
            </Button>

            <Button
              colorScheme="red"
              borderRadius="100%"
              size="sm"
              p="0"
              onClick={() => dispatch(changeActiveColor("red"))}
            >
              {activeColor === "red" ? <CheckIcon /> : ""}
            </Button>
          </div>
          <div>
            <Button
              colorScheme={activeColor === "white" ? "gray" : activeColor}
              fontWeight="500"
              color="black"
              type="submit"
            >
              Add
            </Button>
          </div>
        </Box>
      </form>
    </Box>
  );
}

export default Note;
