import {USERSIGN_IN, GET_PROFILE, GET_USERPROFILE, EDIT_USERPROFILE, EDIT_USERPHOTO, USER_FORGOTPASSWORD } from '../actions/type';

const initialState={
    fullname: '',
    photo: '',
    confirmed: false,
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    address: '',
    idCard: '',
    birthDate:'',
    emergencyContact:'',
    skillSet:'',
    id:'',
    token: '',
    role: ''
}

const userProfile=(state=initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                fullname: action.fullname,
                photo: action.photo,
                confirmed: action.confirmed,
                email: action.email,
                password: action.password,
                username: action.username,
                phoneNumber: action.phoneNumber,
                address: action.address,
                idCard: action.idCard,
                skillSet: action.skillSet,
                emergencyContact: action.emergencyContact,
                birthDate: action.birthDate
            }
            case GET_USERPROFILE:
            return {
                ...state,
                fullname: action.fullname,
                username: action.username,
                photo: action.photo,
                confirmed: action.confirmed,
                email: action.email,
                password: action.password,
                bio:action.bio,
                phoneNumber: action.phoneNumber,
                address: action.address,
                idCard: action.idCard,
                birthDate:action.birthDate,
                skillSet: action.skillSet,
                emergencyContact: action.emergencyContact,
                id : action.id
            }
            case EDIT_USERPROFILE:
            return {
                ...state,
                fullname: action.fullname,
                username: action.username,
                email: action.email,
                bio:action.bio,
                phoneNumber: action.phoneNumber,
                address: action.address,
                idCard: action.idCard,
                birthDate:action.birthDate
            
            }
            case EDIT_USERPHOTO:
            return {
                ...state,
                photo: action.photo
            }
            case USERSIGN_IN:
            localStorage.setItem('token', action.token)
            localStorage.setItem('role', action.role)
            return {
                ...state,
                token: action.token,
                role: action.role
            }
            case USER_FORGOTPASSWORD:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default userProfile