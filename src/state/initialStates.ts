import {
  care_type,
} from "./types/enums";
import {
  SearchHousekeeper,
  SearchSeniorCaregiver,
  SearchTutor,
  signin,
  signup,
  Results,
  IsAuth,
  userProfile,
} from "./types/types";

export const signinInitialState: signin = {
  email: "",
  password: "",
};

export const signupInitialState: signup = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  pictureLink: "",
  careType: null,
  occupation: "",
  province: null,
  aboutMe: "",
  price: 20,
  age: null,
  availability: [],
  level: null,
  subject: null,
  school_year: null,
  education: "",
  transportation: false,
  house_hold_tasks: false,
  personal_care: false,
  mobility_assistance: false,
  specialized_care: false,
  companionship: false,
};

export const searchTutorInitialState: SearchTutor = {
  careType: care_type.tutor,
  province: null,
  fullname: "",
  phoneNumber: "",
  job_description: "",
  level: null,
  subject: null,
  school_year: null,
};

export const searchHousekeeperInitialState: SearchHousekeeper = {
  careType: care_type.housekeeper,
  province: null,
  fullname: "",
  phoneNumber: "",
  job_description: "",
};

export const searchSeniorCaregiverInitialState: SearchSeniorCaregiver = {
  careType: care_type.seniorcaregiver,
  province: null,
  fullname: "",
  phoneNumber: "",
  job_description: "",
  transportation: false,
  house_hold_tasks: false,
  personal_care: false,
  mobility_assistance: false,
  specialized_care: false,
  companionship: false,
};

export const SearchResult: Results = {
  searchResultsType: null,
  results: null
};

export const IsAuthenticated : IsAuth ={
  id : null,
  first_name : null,
  last_name : null,
  link : null,
  isAuth : null
}

export const MoreInfoProfile : userProfile = {
    id : null,
    firstname : null,
    lastname : null,
    email : null,
    Province : null,
    age : null,
    price :null,
    careType : null,
    aboutMe : null,
    availability :null,
    link :null,
    occupation : null
}