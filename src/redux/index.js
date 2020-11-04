import { combineReducers, createStore } from 'redux'

const initialStateLogin = {
    email: "",
    password: ""
};

const initialStateRegister = {
    name: "",
    lastname: "",
    age: "",
    email: "",
};

const login = (state = initialStateLogin, action) => {

    switch(action.type) {
        case "LOGIN_USER_SUCCESS":
            return { ...state };
        case "LOGIN_USER_ERROR":
            return { ...state };
        default:
            return { ...state };
    }
}

const register = (state = initialStateRegister, action) => {
    
    switch(action.type) {
        case "REGISTER_USER_SUCCESS":
            return { ...state };
        case "REGISTER_USER_ERROR":
            return { ...state };
        default:
            return { ...state };
    }
}

const reducers = combineReducers({
    login,
    register
})

export default reducers;

//const storage = createStore(reducers);
  
  