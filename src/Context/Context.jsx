import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';

const AppStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];


const initialState = {
    theme: 'light',
    favs: lsFavs,
    users: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'SET_FAVS':
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }
        default:
            return state;
    }
}

const ContextReducer = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const url = 'https://jsonplaceholder.typicode.com/users';
    
    useEffect(() => {
        axios(url)
            .then(response => {
                console.log(response.data);
                dispatch({ type: 'SET_USERS', payload: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs));
    }, [state.favs]);

    return (
        <AppStates.Provider value={{ state, dispatch }}>
            {children}
        </AppStates.Provider>
    );
}

export default ContextReducer
export const useAppStates = () => useContext(AppStates);