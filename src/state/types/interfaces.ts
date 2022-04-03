import {
  care_type,
  level,
  province,
  school_year_highschool,
  school_year_primary,
  school_year_secondary,
  subject,
  need,
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

export interface Need {
  text: need | null;
}
