export enum signinBox {
  EMAIL = "email",
  PASSWORD = "password",
}

export enum signupBox {
  FIRST_NAME = "first name",
  LAST_NAME = "last name",
  EMAIL = "email",
  PASSWORD = "password",
  PICTURE_LINK = "picture_link",
  CARE_TYPE = "care type",
  OCCUPATION = "occupation",
  PROVINCE = "province",
  ABOUT_ME = "about me",
  PRICE = "price",
  AGE = "age",
  AVAILABILITY = "availability",
  LEVEL = "level",
  SUBJECT = "subject",
  SCHOOL_YEAR = "school year",
  EDUCATION = "education",
  TRANSPORTATION = "transportation",
  HOUSE_HOLD_TASKS = "house holds and tasks",
  PERSONAL_CARE = "personal care",
  MOBILITY_ASSISTANCE = "mobility assistance",
  SPECIALIZED_CARE = "specialized care",
  COMPANIONSHIP = "companionship",
}

export enum care_type {
  tutor = "Tutor",
  housekeeper = "Housekeeper",
  seniorcaregiver = "Senior caregiver",
}

export enum province {
  alger = "Alger",
  boumerdes = "Boumerdes",
  blida = "Blida",
  tiziouzou = "Tiziouzou",
  tipaza = "Tipaza",
  oran = "Oran",
  bejaia = "Bejaia",
  setif = "Setif",
}

export enum level {
  primary_school = "Primary school",
  middle_school = "Middle school",
  high_school = "High school",
}

export enum subject {
  math = "Math",
  physics = "Physics",
  computer_science = "Computer Science",
  science = "Science",
  english = "English",
  french = "French",
}

export enum school_year_primary {
  First = "First Year",
  Second = "Second Year",
  Third = "Third Year",
  Fourth = "Fourth year",
  Fifth = "Fifth year",
}
export enum school_year_secondary {
  First = "First Year",
  Second = "Second Year",
  Third = "Third Year",
  Fourth = "Fourth year",
}
export enum school_year_highschool {
  First = "First Year",
  Second = "Second Year",
  Third = "Third Year",
}

export enum Casename {
  age = "Age",
  careType = "Care type",
  Province = "Province",
  education = "Education",
  subject = "Subject",
  school_year = "Class",
  SearchProvinceTutor = "Search province",
  SearchProvinceHousekeeper = "Search province housekeeper",
  SearchProvinceSeniorCaregiver = "Search province senior caregiver",
  SearchSubject = "search subject",
  SearchSchoolYear = "search school year",
}

export enum need {
  right_now = "Right Now",
  with_in_week = "With in a week",
  with_in_mounth = "With in a mounth",
}

export enum LevelComponentUseCase {
  signup = "Sign up Radio",
  search = "Search radio",
}
