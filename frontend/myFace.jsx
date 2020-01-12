import React from "react";
import ReactDOM from "react-dom";


import configureStore from './store/store.jsx'
import { logout, login } from './actions/session'
import Root from './components/Root'

document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("root");

    //------------

    // window.store = configureStore();
    //------------
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        window.store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        window.store = configureStore();
    }

    //------------
    ReactDOM.render(<Root store={window.store} />, root);
});

window.thisisAthing = 'thing';