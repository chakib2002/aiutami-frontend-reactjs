import React from "react";
import { useSelector } from "react-redux";
import { HalfNavbar } from "../components/Home_components/HalfNavbar";
import { SearchCardFilterTutor } from "../components/Search_components/SearchCardFilterTutor";
import { SearchCardPersonalInfo } from "../components/Search_components/SearchCardPersonalInfo";
import { SearchCardProvince } from "../components/Search_components/SearchCardProvince";
import {
  isAuthenticatedState,
  seachTutorPageNumberState,
  searchTutorState,
} from "../state/configureStore";
import {
  decrementPageNumberTutor,
  incrementPageNumberTutor,
  searchTutorFullName,
  searchTutorJobDescription,
  searchTutorPhoneNumber,
  searchTutorProvince,
} from "../state/Slices/searchTutorSlice";
import { Casename } from "../state/types/enums";
import { motion } from "framer-motion";

export const SearchPageTutor = () => {
  const page_number = useSelector(seachTutorPageNumberState);
  const data = useSelector(searchTutorState);
  const auth_data = useSelector(isAuthenticatedState)
  return (
    <motion.div
    key="searchPageTutor" 
    exit={{ opacity: 0 }}>
      {auth_data.isAuth === true && <HalfNavbar isAuth={true} />}
      {auth_data.isAuth === false && <HalfNavbar isAuth={false} />}
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Tutor</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      {page_number === 1 && (
        <SearchCardProvince
          type={Casename.SearchProvinceTutor}
          TheAction={searchTutorProvince}
          next={incrementPageNumberTutor}
        />
      )}
      {page_number === 2 && (
        <SearchCardPersonalInfo
          data={data}
          next={incrementPageNumberTutor}
          prev={decrementPageNumberTutor}
          fullnameAction={searchTutorFullName}
          phoneNumberAction={searchTutorPhoneNumber}
          Job_descriptionAction={searchTutorJobDescription}
        />
      )}
      {page_number === 3 && <SearchCardFilterTutor />}
    </motion.div>
  );
};
