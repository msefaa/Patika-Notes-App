import Header from "./components/Header";
import Note from "./components/Note";
import NoteList from "./components/Notelist/NoteList";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container
        maxWidth={750}
        mt={15}
        shadow="md"
        p={5}
        my="auto"
        justifyContent={"space-between"}
      >
        <Header />
        <Note />
        <NoteList />
      </Container>
    </ChakraProvider>
  );
}

export default App;
