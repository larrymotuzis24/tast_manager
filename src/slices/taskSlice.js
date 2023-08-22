import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection,  deleteDoc, doc  } from "firebase/firestore"; 
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

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  try {
    // Delete the task from Firebase using the task ID
    await deleteDoc(doc(db, 'tasks', taskId));
    console.log('Task deleted successfully:', taskId);
    return taskId;
  } catch (error) {
    console.error('Error deleting task:', error);
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
    },
    extraReducers: (builder) => {
      builder
        .addCase(createTask.fulfilled, (state, action) => {
          state.tasks.push(action.payload);
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
          state.tasks = state.tasks.filter(task => task.id !== action.payload);
        });
    }
  });

  export const { setTasks } = taskSlice.actions;
  
  export default taskSlice.reducer;