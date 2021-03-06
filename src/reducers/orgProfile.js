import { FORGOT_PASSWORD, GET_PROFILE, EDIT_PROFILE, EDIT_PROFILE_PHOTO, SIGN_IN_ORG } from '../actions/type';

const initialState={
    organizationName: '',
    photo: '',
    confirmed: false,
    username: '',
    email: '',
    phoneNumber: '',
    token:'',
    role:''
}

const orgProfile=(state=initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ORG:
            localStorage.setItem('token', action.token)
            localStorage.setItem('role', action.role)
            return {
                ...state,
                token: action.token,
                role: action.role
            }
        case GET_PROFILE:
            return {
                ...state,
                organizationName: action.organizationName,
                photo: action.photo,
                confirmed: action.confirmed,
                username: action.username,
                email: action.email,
                phoneNumber: action.phoneNumber
            }
        case EDIT_PROFILE:
            return {
                ...state,
                organizationName: action.organizationName,
                confirmed: action.confirmed, 
                username: action.username,
                email: action.email,
                phoneNumber: action.phoneNumber
            }
        case EDIT_PROFILE_PHOTO:
            return {
                ...state,
                photo: action.photo
            }
        case FORGOT_PASSWORD:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default orgProfile