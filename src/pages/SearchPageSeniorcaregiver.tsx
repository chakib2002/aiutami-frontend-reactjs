import React from "react";
import { useSelector } from "react-redux";
import { Casename } from "../state/types/enums";
import { HalfNavbar } from "../components/HalfNavbar";
import { SearchCardPersonalInfo } from "../components/SearchCardPersonalInfo";
import { SearchCardProvince } from "../components/SearchCardProvince";
import {
  isAuthenticatedState,
  searchSeniorCaregiverPageNumberState,
  searchSeniorCaregiverState,
} from "../state/configureStore";
import {
  decrementPageNumberSeniorCaregiver,
  incrementPageNumberSeniorCaregiver,
  searchSeniorCaregiverFullName,
  searchSeniorCaregiverJobDescription,
  searchSeniorCaregiverPhoneNumber,
  searchSeniorcaregiverProvince,
} from "../state/Slices/searchSeniorCaregiverSlice";
import { SearchCardFilterSeniorcaregiver } from "../components/SearchCardFilterSeniorcaregiver";
import { motion } from "framer-motion";

export const SearchPageSeniorcaregiver = () => {
  const page_number = useSelector(searchSeniorCaregiverPageNumberState);
  const data = useSelector(searchSeniorCaregiverState);

  const auth_data = useSelector(isAuthenticatedState)

  return (
    <motion.div exit={{ opacity: 0 }}>
      {auth_data.isAuth === true && 
      <>
      <HalfNavbar isAuth={true} />
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Senior caregiver</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      {page_number === 1 && (
        <SearchCardProvince
          type={Casename.SearchProvinceSeniorCaregiver}
          TheAction={searchSeniorcaregiverProvince}
          next={incrementPageNumberSeniorCaregiver}
        />
      )}
      {page_number === 2 && (
        <SearchCardPersonalInfo
          data={data}
          next={incrementPageNumberSeniorCaregiver}
          prev={decrementPageNumberSeniorCaregiver}
          fullnameAction={searchSeniorCaregiverFullName}
          phoneNumberAction={searchSeniorCaregiverPhoneNumber}
          Job_descriptionAction={searchSeniorCaregiverJobDescription}
        />
      )}
      {page_number === 3 && <SearchCardFilterSeniorcaregiver />}
      </>
}

{auth_data.isAuth === false && 
      <>
      <HalfNavbar isAuth={false} />
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Senior caregiver</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      {page_number === 1 && (
        <SearchCardProvince
          type={Casename.SearchProvinceSeniorCaregiver}
          TheAction={searchSeniorcaregiverProvince}
          next={incrementPageNumberSeniorCaregiver}
        />
      )}
      {page_number === 2 && (
        <SearchCardPersonalInfo
          data={data}
          next={incrementPageNumberSeniorCaregiver}
          prev={decrementPageNumberSeniorCaregiver}
          fullnameAction={searchSeniorCaregiverFullName}
          phoneNumberAction={searchSeniorCaregiverPhoneNumber}
          Job_descriptionAction={searchSeniorCaregiverJobDescription}
        />
      )}
      {page_number === 3 && <SearchCardFilterSeniorcaregiver />}
      </>
}
    </motion.div>
  );
};
