import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/NoteReducer";
function Header() {
  const filtered = useSelector((state) => state.notes.filtered);
  const dispatch = useDispatch();
  return (
    <div style={{ marginBottom: "10px" }}>
      <Box textAlign="center">
        <Text
          fontSize="3xl"
          fontWeight="300"
          color="gray.600"
          p="3"
          textShadow="0 0 2px #4A5568"
        >
          My<span style={{ fontWeight: "500" }}>Notes</span>
        </Text>
      </Box>

      <Box zIndex="1" bg="white" rounded="xl">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            value={filtered}
            type="text"
            placeholder="Note Search"
            border="0"
            focusBorderColor="none"
            fontWeight="300"
            spellCheck="false"
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </InputGroup>
      </Box>
    </div>
  );
}

export default Header;
