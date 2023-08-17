import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebaseConfig";

const initialState = {
    tasks: [],
};

export const createTask = createAsyncThunk('tasks/createTask', async (taskData) => {
  try {
    const taskRef = await addDoc(collection(db, 'tasks'), taskData);
    console.log('Task created successfully:', taskRef);
    return { id: taskRef.id, ...taskData };
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      setTasks:(state, action) => {
        state.tasks = action.payload;
      }
    }
  });

  export const { setTasks } = taskSlice.actions;
  
  export default taskSlice.reducer;