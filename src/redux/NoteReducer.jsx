import { createSlice, nanoid } from "@reduxjs/toolkit";
export const getLocalStorage = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};
export const setLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
const initialState = {
  notes: [...getLocalStorage()],
  isLoading: false,
  error: null,
  filtered: "",
  activeColor: "white",
  currentNote: null,
};
export const todoSlices = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.unshift(action.payload);
        localStorage.setItem("notes", JSON.stringify(state.notes));
      },
      prepare: (notes, activeColor) => {
        return {
          payload: {
            id: nanoid(),
            note: notes,
            color: activeColor,
          },
        };
      },
    },
    changeActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
    onClickNote: (state, action) => {
      state.currentNote = action.payload;
    },
    edit: (state, action) => {
      state.notes.find((item) =>
        item.id === state.currentNote.id ? (item.note = action.payload) : ""
      );
      setLocalStorage(state.notes);
    },
    deleteNote: (state) => {
      state.notes = state.notes.filter(
        (item) => item.id !== state.currentNote.id
      );
      setLocalStorage(state.notes);
    },
    search: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const {
  search,
  edit,
  deleteNote,
  onClickNote,
  addNote,
  destroy,
  changeActiveColor,
  clearCompleted,
} = todoSlices.actions;
export default todoSlices.reducer;
