import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { signinInitialState, signupInitialState } from '../initialStates'
import { SignIn, signinBox, SignUp, signupBox } from '../types'

export const signinReducer = createSlice({
    name:"signin",
    initialState: signinInitialState,
    reducers : {
        signin : (state,{payload} : PayloadAction<SignIn>)=> {
            if(payload.box === signinBox.EMAIL){
                state.email = payload.email
            }else if (payload.box === signinBox.PASSWORD){
                state.password = payload.password
            }
            }
        }
    }
)
export const signupReducer = createSlice({
    name : "signup",
    initialState : signupInitialState,
    reducers : {
        signup : (state, {payload} : PayloadAction<SignUp>) =>{
            switch (payload.box) {
                case signupBox.FIRST_NAME :
                    state.firstName = payload.firstName;
                    break;
                case signupBox.LAST_NAME :
                    state.lastName = payload.lastName;
                    break;
                case signupBox.EMAIL :
                    state.email = payload.email
                    break;
                case signupBox.PASSWORD : 
                    state.password = payload.password
                    break;
                case signupBox.PICTURE_LINK :
                    state.pictureLink = payload.pictureLink
                    break;
                case signupBox.CARE_TYPE :
                    state.careType = payload.careType;
                    break;
                case signupBox.OCCUPATION : 
                    state.occupation = payload.occupation
                    break;
                case signupBox.PROVINCE :
                    state.province = payload.province
                    break;
                case signupBox.ABOUT_ME :
                    state.aboutMe = payload.aboutMe
                    break;
                case signupBox.PRICE :
                    state.price = payload.price
                    break;
                case signupBox.AGE :
                    state.age= payload.age
                    break;
                case signupBox.AVAILABILITY :
                    state.availability = payload.availability
                    break;
                case signupBox.LEVEL:
                    state.level = payload.level
                    break;
                case signupBox.SUBJECT :
                    state.subject = payload.subject
                    break;
                case signupBox.SCHOOL_YEAR :
                    state.school_year = payload.school_year
                    break;
                case signupBox.EDUCATION :
                    state.education = payload.education
                    break;
                case signupBox.TRANSPORTATION :
                    state.transportation= payload.transportation
                    break;
                case signupBox.HOUSE_HOLD_TASKS:
                    state.house_hold_tasks = payload.house_hold_tasks
                    break;
                case signupBox.PERSONAL_CARE :
                    state.personal_care= payload.personal_care
                    break;
                case signupBox.MOBILITY_ASSISTANCE :
                    state.mobility_assistance = payload.mobility_assistance
                    break;
                case signupBox.SPECIALIZED_CARE :
                    state.specialized_care = payload.specialized_care
                    break;
                case signupBox.COMPANIONSHIP :
                    state.companionship = payload.companionship
                    break;
                default:
                    return state  ;          
        }
    }}
})

export const { signin } = signinReducer.actions;
export const { signup } = signupReducer.actions
