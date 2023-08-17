import { clearUser, setUser } from "./slices/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const signIn = (email, password) => async (dispatch) => {
    try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const { uid, email: userEmail } = userCredential.user;
                dispatch(setUser({ uid, email: userEmail }));
                //setting user in localStorage 
                localStorage.setItem('user', JSON.stringify({uid, email:userEmail}))
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    catch (error) {

    }
};

export const signOutUser = () => async(dispatch) => {
    try {
        const auth = getAuth();
        auth.signOut();
        dispatch(clearUser());
        localStorage.removeItem('user');
    }
    catch (error){
        console.log(error)
    }
};