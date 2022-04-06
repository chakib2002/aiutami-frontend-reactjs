import React from "react";
import {
  searchHousekeeperState,
  searchSeniorCaregiverState,
  searchTutorState,
  signupState,
  useAppDispatch,
} from "../state/configureStore";
import { useSelector } from "react-redux";
import { Casename } from "../state/types/enums";

export const DropDown = ({
  title,
  name,
  options,
  width,
  theAction,
}: {
  title: string;
  name: string;
  options: string[] | number[];
  width: string;
  theAction: Function;
}) => {
  const signup_data = useSelector(signupState);
  const search_tutor_data = useSelector(searchTutorState);
  const search_housekeeper_data = useSelector(searchHousekeeperState);
  const search_senior_caregiver_data = useSelector(searchSeniorCaregiverState);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex justify-center lg:justify-start my-auto">
        <div className="">
          <div className="dropdown relative ">
            <h1
              className={`${width} text-left block text-sm opacity-85 font-medium`}
            >
              {title}
            </h1>
            <button
              className={`${width}
              h-[42px]
              mb-4
              my-auto
              dropdown-toggle
              px-6
              py-3
              bg-gray-50
              text-gray-800
              text-sm
              font-medium
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-primary hover:shadow-lg hover:text-white
              focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg active:text-white
              transition
              duration-150
              ease-in-out
              flex
              items-center
              whitespace-nowrap`}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {name === Casename.Province && signup_data.province}
              {name === Casename.age && signup_data.age}
              {name === Casename.careType && signup_data.careType}
              {name === Casename.education && signup_data.education}
              {name === Casename.subject && signup_data.subject}
              {name === Casename.school_year && signup_data.school_year}
              {name === Casename.SearchProvinceTutor &&
                search_tutor_data.province}
              {name === Casename.SearchProvinceHousekeeper &&
                search_housekeeper_data.province}
              {name === Casename.SearchProvinceSeniorCaregiver &&
                search_senior_caregiver_data.province}
              {name === Casename.SearchSubject && search_tutor_data.subject}
              {name === Casename.SearchSchoolYear &&
                search_tutor_data.school_year}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2 absolute right-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              className={`
              scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300  scrollbar-thumb-rounded-full scrollbar-track-rounded-full
              dropdown-menu
              min-w-max
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              list-none
              text-left
              rounded-lg
              shadow-lg
              mt-1
              m-0
              bg-clip-padding
              border-none 
              max-h-52
              overflow-y-auto
              ${width}`}
              aria-labelledby="dropdownMenuButton1"
            >
              {options.map((element, index) => {
                return (
                  <li
                    onClick={() => dispatch(theAction({ text: element }))}
                    key={index}
                    className="
                    py-3
              cursor-pointer
              dropdown-item
              text-sm
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  >
                    {element}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
