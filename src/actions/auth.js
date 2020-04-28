import {firebase , googleAuthProvider} from '../Firebase/firebase';

export const startLogin = () => {
    return() => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};