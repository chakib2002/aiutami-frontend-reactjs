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
  text: number ;
}

export interface notificationId {
  text : number | null
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
  link : string,
  pricing : number ,
  about_me : string ,
  availability : string ,
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
    link : string,
    price : number ,
    about_me : string ,
    availability : string,
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

  export interface Authenticated  {
    id : number | null,
    first_name : string,
    last_name : string,
    link : string | null,
    isAuthenticated : boolean
  }

  export interface User_Profile {
    id : number | null ,
    firstname : string | null,
    lastname : string | null,
    email : string | null,
    Province : string | null,
    age : number | null,
    price :number | null,
    careType : string | null,
    aboutMe : string | null,
    availability :string | null,
    link :string | null,
    occupation : string |null
  }

  export interface RedisNotificationInterface {
      id : number,
      full_name: string,
      phone_number: string,
      location: string,
      time: string,
      job_description: string
  } 

  export interface dbNotificationInterface {
    id: number,
    full_name: string,
    phone_number: string,
    location: string,
    job_description: string,
    time: string,
    seen: boolean,
    accepted: boolean,
    new: boolean,
  }
