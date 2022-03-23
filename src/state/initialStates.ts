import {signin, signup} from './types'


export const signinInitialState : signin = {
    email:'',
    password:''
}

export const signupInitialState : signup = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    pictureLink : '',
    careType : null,
    occupation : '',
    province : null ,
    aboutMe : '',
    price : 250,
    age : 18,
    availability: [],
    level :null,
    subject :  null,
    school_year :null,
    education : '',
    transportation : false,
    house_hold_tasks : false,
    personal_care : false,
    mobility_assistance : false ,
    specialized_care : false, 
    companionship : false
}