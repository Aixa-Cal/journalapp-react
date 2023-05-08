import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login } from "./authSlice"

export const chekingAuthentication = ( email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

    }
}

export const statGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}