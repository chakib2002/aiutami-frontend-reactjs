import React from "react";
import { useSelector } from "react-redux";
import { HalfNavbar } from "../components/Home_components/HalfNavbar";
import { SearchCardPersonalInfo } from "../components/Search_components/SearchCardPersonalInfo";
import { SearchCardProvince } from "../components/Search_components/SearchCardProvince";
import {
  isAuthenticatedState,
  searchHousekeeperPageNumberState,
  searchHousekeeperState,
} from "../state/configureStore";
import {
  incrementPageNumberHousekeeper,
  searchHousekeeperFullname,
  searchHousekeeperJobDescription,
  searchHousekeeperPhoneNumber,
  searchHousekeeperProvince,
} from "../state/Slices/searchHousekeeperSlice";
import { decrementPageNumberHousekeeper } from "../state/Slices/searchHousekeeperSlice";
import { Casename } from "../state/types/enums";
import { motion } from "framer-motion";

export const SearchPageHousekeeper = (
  {newNotificationNumber, 
    setNewNotificationNumber} : {
      newNotificationNumber : number ,
      setNewNotificationNumber :Function}
) => {
  const page_number = useSelector(searchHousekeeperPageNumberState);
  const data = useSelector(searchHousekeeperState);
  const auth_data = useSelector(isAuthenticatedState)
  return (
    <motion.div
    key="searchPageHousekeeper"
    exit={{ opacity: 0 }}>
     { auth_data.isAuth === true &&
     <>
       <HalfNavbar isAuth={true} newNotificationNumber={newNotificationNumber} setNewNotificationNumber={setNewNotificationNumber} />
      
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Housekeeper</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      {page_number === 1 && (
        <SearchCardProvince
          type={Casename.SearchProvinceHousekeeper}
          TheAction={searchHousekeeperProvince}
          next={incrementPageNumberHousekeeper}
        />
      )}
      {page_number === 2 && (
        <SearchCardPersonalInfo
          data={data}
          next={incrementPageNumberHousekeeper}
          prev={decrementPageNumberHousekeeper}
          fullnameAction={searchHousekeeperFullname}
          phoneNumberAction={searchHousekeeperPhoneNumber}
          Job_descriptionAction={searchHousekeeperJobDescription}
        />
      )}
      </>}


      { auth_data.isAuth === false &&
     <>
       <HalfNavbar isAuth={false} />
      
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Housekeeper</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      {page_number === 1 && (
        <SearchCardProvince
          type={Casename.SearchProvinceHousekeeper}
          TheAction={searchHousekeeperProvince}
          next={incrementPageNumberHousekeeper}
        />
      )}
      {page_number === 2 && (
        <SearchCardPersonalInfo
          data={data}
          next={incrementPageNumberHousekeeper}
          prev={decrementPageNumberHousekeeper}
          fullnameAction={searchHousekeeperFullname}
          phoneNumberAction={searchHousekeeperPhoneNumber}
          Job_descriptionAction={searchHousekeeperJobDescription}
        />
      )}
      </>}
    </motion.div>
  );
};
