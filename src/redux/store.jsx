import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./NoteReducer";
export const store = configureStore({
  reducer: {
    notes: NoteReducer,
  },
});
