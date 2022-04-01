import {
  care_type,
  level,
  province,
  school_year_highschool,
  school_year_primary,
  school_year_secondary,
  subject,
} from "./enums";

export type signin = {
  email: string;
  password: string;
};
export type signup = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  pictureLink: string;
  careType: care_type | null;
  occupation: string;
  province: province | null;
  aboutMe: string;
  price: number;
  age: number | null;
  availability: string[];
  level: level | null;
  subject: subject | null;
  school_year:
    | school_year_highschool
    | school_year_secondary
    | school_year_primary
    | null;
  education: string;
  transportation: boolean;
  house_hold_tasks: boolean;
  personal_care: boolean;
  mobility_assistance: boolean;
  specialized_care: boolean;
  companionship: boolean;
};
