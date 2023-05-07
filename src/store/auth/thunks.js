import { checkingCredentials } from "./authSlice"

export const chekingAuthentication = ( email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

    }
}

export const statGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}