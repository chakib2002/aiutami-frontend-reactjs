import {
  care_type,
  level,
  province,
  school_year_highschool,
  school_year_primary,
  school_year_secondary,
  subject,
} from "./enums";

export interface textString {
  text: string;
}
export interface TextNumber {
  text: number;
}

export interface textBool {
  text: boolean;
}

export interface signupProvince {
  text: province;
}

export interface signupCareType {
  text: care_type;
}

export interface signupLevel {
  text: level;
}

export interface signupSubjects {
  text: subject;
}

export interface signupClass {
  text: school_year_primary | school_year_secondary | school_year_highschool;
}

export interface searchResultType {
  text : care_type | null
}

export interface searchResultBody {
  id : number ,
  firstname : string ,
  lastname : string ,
  age : number ,
  email : string ,
  care_type : string ,
  occupation : string ,
  province: string ,
  pricing : number ,
  about_me : string ,
  availability : JSON ,
  level? : string,
  subject? : string,
  school_year? : string,
  education? : string,
  transportation?: boolean,
  house_hold_tasks?: boolean,
  personal_care?: boolean,
  mobility_assistance?: boolean,
  specialized_care?: boolean,
  companionship?: boolean,
}

export interface ResultResponse {

    id : number ,
    first_name : string ,
    last_name : string ,
    age : number ,
    email : string ,
    care_type : string ,
    occupation : string ,
    province: string ,
    price : number ,
    about_me : string ,
    availability : JSON ,
    Tutor : {
      level? : string,
      subject? : string,
      schoolyear? : string,
      education? : string,
    }
    Seniorcare : {
    transportation?: boolean,
    house_hold_tasks?: boolean,
    personal_care?: boolean,
    mobility_assistance?: boolean,
    specialized_care?: boolean,
    companionship?: boolean,
    }
  }

