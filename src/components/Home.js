import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignInMessage from "./SignInMessage";
import TaskFormModal from "./TaskFormModal";
import TaskList from "./TaskList";

const HomePage = () => {
    const isAuthenticated = useSelector((state) => !!state.auth.user);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold underline"> Home Page </h2>
                <div>
                    {isAuthenticated ? (
                        <>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
                            >
                                Create Task
                            </button>
                            <TaskFormModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                            />
                        </>
                    ) : (
                        <SignInMessage />
                    )}
                </div>
            </div>
            <div className="w-1/2">
                <TaskList />
            </div>
        </div>
    );
};

export default HomePage;
