export interface signin  {
    email : string,
    password : string
}

export interface SignIn extends signin {
    box : string
}

enum care_type  {
    tutor = "Tutor",
    housekeeper ="Housekeeper",
    seniorcaregiver = "Senior caregiver"
}

enum province {
    alger = "Alger",
    boumerdes = "Boumerdes",
    blida = "Blida",
    tiziouzou = "Tiziouzou",
    tipaza="Tipaza",
    oran = "Oran",
    bejaia = "Bejaia",
    setif = "Setif"
}

enum level {
    primary_school = "Primary school",
    middle_school = "Middle school",
    high_school = "High school"
}

enum subject {
    math ="Math",
    physics="Physics",
    computer_science = "Computer Science",
    science ="Science",
    english = "English",
    french = "French"
}

enum school_year_primary {
    First = "First Year",
    Second = "Second Year",
    Third = "Third Year",
    Fourth = "Fourth year",
    Fifth = "Fifth year"

}
enum school_year_secondary {
    First = "First Year",
    Second = "Second Year",
    Third = "Third Year",
    Fourth = "Fourth year"
}
enum school_year_highschool {
    First = "First Year",
    Second = "Second Year",
    Third = "Third Year",
}




export interface signup {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    pictureLink : string,
    careType : care_type |null,
    occupation : string,
    province : province |null ,
    aboutMe : string,
    price : number,
    age : number,
    availability: string[] ,
    level : level |null,
    subject : subject | null,
    school_year : school_year_primary | school_year_secondary |school_year_highschool |null,
    education : string,
    transportation : boolean,
    house_hold_tasks : boolean,
    personal_care : boolean,
    mobility_assistance : boolean ,
    specialized_care : boolean, 
    companionship : boolean
}