import React from "react";
import TaskForm from "./TaskForm";
import { useSelector } from "react-redux";
import SignInMessage from "./SignInMessage";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import TaskList from "./TaskList";


const HomePage = () => {

   
    const isAuthenticated = useSelector((state) => !!state.auth.user);

    return (
        <div>
            <h2 className="text-3xl font-bold underline"> Home Page </h2>
            <div>
                {isAuthenticated ? <TaskForm /> : <SignInMessage />}
            </div>
            <TaskList />
        </div>
    )
};

export default HomePage;