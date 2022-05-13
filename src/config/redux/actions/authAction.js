import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { firebaseAuth } from "../../firebase/firebaseConfig";


const loginGoogle = () => {
    return async (dispatch) => {
        try {
            const data = await signInWithPopup(
                firebaseAuth,
                new GoogleAuthProvider()
            );
            dispatch({ type: 'SET_DATA_LOGIN', payload: data });
            return data
        } catch (error) {
            alert(error.message)
        }
    }
}

const loginEmail = (email, password) => {
    return async (dispatch) => {
        try {
            const data = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            dispatch({ type: 'SET_DATA_LOGIN', payload: data });
            return data
        } catch (error) {
            alert(error.message)
        }
    }
}

const register = async (email, password) => {
    try {
        const data = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        return data
    } catch (error) {
        alert(error)
    }
}

const logOut = () => {
    return async (dispatch) => {
        try {
            const data = await signOut(firebaseAuth)
            dispatch({type: 'SET_DATA_LOGIN', payload: data})
            setTimeout(()=>{
                alert('Logout Successfully');
            },2000);
            return data
        } catch (error) {
            alert(error)
        }
    }
}

export { loginGoogle, loginEmail, register, logOut }