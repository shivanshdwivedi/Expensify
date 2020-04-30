// jshint esversion : 6

import {firebase , googleAuthProvider} from '../Firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogin = () => {
    return() => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogout = () => {
    return() => {
        return firebase.auth().signOut();  
    };
};

