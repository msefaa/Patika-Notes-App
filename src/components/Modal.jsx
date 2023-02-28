import { Textarea, useToast } from "@chakra-ui/react";
import { Button, Modal, Popconfirm } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, deleteNote } from "../redux/NoteReducer";
const App = ({ setIsOpen, isOpen }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.notes.currentNote);
  const [editNote, setEditNote] = useState(item.note);
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const saveSubmit = () => {
    dispatch(edit(editNote));
    setIsOpen(!isOpen);
    toast({
      description: "Note saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const deleteSubmit = () => {
    dispatch(deleteNote());
    setIsOpen(!isOpen);
    toast({
      title: "Note deleted",
      duration: 3000,
      status: "warning",
      isClosable: true,
    });
  };
  return (
    <>
      <Modal
        open={isOpen}
        title="Note Details"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={saveSubmit}
          >
            Save
          </Button>,

          <Popconfirm
            key="delete"
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={deleteSubmit}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="primary" loading={loading}>
              Delete
            </Button>
          </Popconfirm>,
        ]}
      >
        <Textarea
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
          fontWeight="300"
          w="100%"
          h="160px"
          placeholder="Enter your note here"
          resize="none"
          focusBorderColor="none"
          spellCheck="false"
        />
      </Modal>
    </>
  );
};
export default App;
