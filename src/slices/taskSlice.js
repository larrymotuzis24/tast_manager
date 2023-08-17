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
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createTask.fulfilled, (state, action) => {
          state.tasks.push(action.payload);
        })
        .addCase(createTask.rejected, (state, action) => {
          // Handle the rejected case if needed
          console.log('error creating task')
        });
    },
  });
  
  export default taskSlice.reducer;