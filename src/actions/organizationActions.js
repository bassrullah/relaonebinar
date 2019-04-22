import axios from 'axios';
import { ADD_EVENT, GET_SKILLSET, GET_EVENT, GET_PROFILE, DEL_EVENT, EDIT_PROFILE, GET_ARTICLE, EDIT_PROFILE_PHOTO, EDIT_EVENT_PHOTO, SEARCH_ARTICLE, EDIT_EVENT, SIGN_UP} from './type';
import history from '../history';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
        position: "top-center"}
)

export const getSkillset = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/skillset',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU"}
        })
        .then(res => {
            dispatch ({
                type: GET_SKILLSET,
                payload: res.data.data
            })
        })
    }
}

export const getEvent = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/event',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU"}
        })
        .then(res => {
            dispatch ({
                type: GET_EVENT,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const addEvent = (title, description, deadline, location, quotaMax, skillSet) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'post',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: {
                title,
                description,
                deadline,
                location,
                quotaMax,
                skillSet
            }
        })
            .then(res => {
                dispatch({
                type: ADD_EVENT,
                payload: res.data.data
                });
                toast.success("Your event is successfully created")
                history.push('/organization/event');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const delEvent = (id) => {
    return dispatch => {
        axios({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'delete',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: {
                id
            }
            })
            .then(res => {
                console.log(res)
                dispatch ({
                    type: DEL_EVENT,
                    id
                })
                toast.success("Your event is successfully deleted")
            })
            .catch(err => console.log(err))
        }
    }


export const editEvent = (_id, title, description, location, quotaMax, skillSet, deadline) => {
    return dispatch => {
        console.log(_id, title, description, location, quotaMax, skillSet, deadline)
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/event',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: {
                "id": _id,
                "title": title,
                "description": description,
                "deadline": deadline,
                "location": location,
                "quotaMax": quotaMax,
                "skillSet": skillSet
            }
        })
            .then(res => {
                console.log(res.data.data)
                dispatch({
                type: EDIT_EVENT
                });
                toast.success("Your event has been updated")
                history.push('/event');
                }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}
  
export const editEventPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/uploadphotoevent',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: formdata
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_EVENT_PHOTO,
                photo: res.data.data.photo
                })
                toast.success("Your event has been updated")
                }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const getProfile = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/profile',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU"}
        })
        .then(res => {
            dispatch ({
                type: GET_PROFILE,
                organizationName: res.data.data.organizationName,
                photo: res.data.data.photo,
                confirmed: res.data.data.confirmed,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber
            })
        })
    }
}

export const editProfile = (organizationName, username, email, phoneNumber) => {
    return dispatch => {
        console.log(organizationName, username, email, phoneNumber)
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/profile',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: {
                organizationName, 
                username, 
                email, 
                phoneNumber
            }
        })
            .then(res => {
                dispatch({
                type: EDIT_PROFILE,
                organizationName: res.data.data.organizationName,
                confirmed: res.data.data.confirmed,
                username: res.data.data.username,
                email: res.data.data.email,
                phoneNumber: res.data.data.phoneNumber
                });
                history.push('/organization/update-profile/success');
              }
            )
            .catch(err => {
                console.log(err)
                // console.log(err.data.message)
                toast.error("Error. Please check your input.")
            })
    }
}

export const signup = (organizationName, username, phoneNumber, email, password) => {
    return dispatch => {
      axios
        .post("https://relaonebinar.herokuapp.com/api/organization/signup", {
          organizationName,
          username,
          phoneNumber,
          email,
          password
        })
        .then(res => {
          console.log(res);
          dispatch({
            type: SIGN_UP,
            organizationName,
            username,
            phoneNumber,
            email,
            password
          });
          history.push('/register/success')
        }) 
        .catch(err => {
          console.log(err.response);
        });
    };
  };
export const editPhoto = (formdata) => {
    return dispatch => {
        axios ({
            url: 'https://relaonebinar.herokuapp.com/api/organization/uploadphoto',
            method: 'put',
            headers: { 
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU'
            },
            data: formdata
        })
            .then(res => {
                console.log(res)
                dispatch({
                type: EDIT_PROFILE_PHOTO,
                photo: res.data.data.photo
                });
                history.push('/organization/update-profile/success');
              }
            )
            .catch(err => {
                console.log(err)
                toast.error("Error. Please check your input.")
            })
    }
}

export const getArticle = () => {
    return dispatch => {
        axios.get('https://relaonebinar.herokuapp.com/api/organization/article',
        {
            headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU"}
        })
        .then(res => {
            dispatch ({
                type: GET_ARTICLE,
                payload: res.data.data
            })
        })
    }
}

export const searchArticle = (keyword) => {
    return dispatch => {
        axios.get(`https://relaonebinar.herokuapp.com/api/organization/searcharticle?search=${keyword}`,
        {
          headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTMyNGE0YWRiYTlhNDA5YjY5YWE3YyIsInVzZXJuYW1lIjoibWFudGFwIiwiZW1haWwiOiJwYWxzdWFzbGk2OUBnbWFpbC5jb20iLCJvcmdhbml6YXRpb25OYW1lIjoiQmFkYW4gUGVuYW5nZ3VsYW5nYW4gQmVuY2FuYSBEYWVyYWgiLCJyb2xlIjoib3JnYW5pemF0aW9uIiwiaWF0IjoxNTU1ODU2OTk2LCJleHAiOjE1NTY0NjE3OTZ9.H7Q_PxOD2SadAK1GLCxoUsXmdrOPW7DTjSIWPEQPrxU"}          
        })
        .then(res => {
          if (res.data.message === "Article not found") {
            console.log('not found');
            toast.warn(res.data.message)
          } else {
            dispatch ({
                type: SEARCH_ARTICLE,
                payload: res.data.data
            })
          }
        })
        .catch(err => console.log(err))
    }
  }

const url = "https://relaonebinar.herokuapp.com/api";

export const signIn = (username, password) => {
    return dispatch => {
      axios
        .post(`${url}/organization/login`, {
          username: username,
          password: password
        })
        .then(res => {
          console.log(res);
          dispatch({
            type: "SIGN_IN",
            username,
            password,
            response: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
  };