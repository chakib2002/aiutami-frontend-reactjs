import { signin, signup } from "./types/types";

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
