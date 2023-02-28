import React, { useState } from "react";
import styles from "./NoteList.module.css";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal";
import { onClickNote } from "../../redux/NoteReducer";

function NoteList() {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes.notes);
  const filtered = useSelector((state) => state.notes.filtered);
  const dispatch = useDispatch();
  const filteredNotes = notes.filter((item) =>
    item.note.toLowerCase().includes(filtered.toLowerCase())
  );
  const handelClick = (item) => {
    dispatch(onClickNote(item));
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Heading noOfLines={1} className={styles.headerTitle}>
        {notes
          ? "You don't have any note"
          : `You have Total ${notes.length} notes.`}
      </Heading>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        pt="1"
      >
        {filteredNotes.map((item) => (
          <Box
            key={item.id}
            m="1"
            p="1"
            bg={item.color}
            className={styles.box}
            borderRadius="16"
            rounded="xl"
            boxShadow="xl"
            overflow="hidden"
            textOverflow="ellipsis"
            onClick={() => handelClick(item)}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Text
              className={styles.noteFont}
              color={item.color === "blue" ? "white" : "gray.700"}
              textShadow="0 0 1px #4A5568"
              p={1}
              height={180}
              width={220}
            >
              {item.note}
            </Text>
          </Box>
        ))}
      </Box>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default NoteList;
