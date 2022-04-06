import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { searchSeniorCaregiverState } from "../state/configureStore";
import {
  searchSeniorCaregiverCompanionship,
  searchSeniorCaregiverHouseHoldTasks,
  searchSeniorCaregiverMobilityAssistance,
  searchSeniorCaregiverPersonalCare,
  searchSeniorCaregiverSpecializedCare,
  searchSeniorCaregiverTransportation,
} from "../state/Slices/searchSeniorCaregiverSlice";
import { Check } from "./Check";

export const SearchFilterSeniorcaregiver = () => {
  const data = useSelector(searchSeniorCaregiverState);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="filter_seniorcaregivers"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="my-3"
      >
        <Check
          checkCard={[
            {
              title: "Transportation",
              description: " Provide transportation to your Client",
              action: searchSeniorCaregiverTransportation,
              state: data.transportation,
            },
            {
              title: "House hold tasks",
              description: "Perpare meal, take care of the house",
              action: searchSeniorCaregiverHouseHoldTasks,
              state: data.house_hold_tasks,
            },
            {
              title: "Personal care",
              description:
                "Provide personal help to your client like shower, clothings ext.",
              action: searchSeniorCaregiverPersonalCare,
              state: data.personal_care,
            },
            {
              title: "Specialized care",
              description: "Experience with different types of diseases",
              action: searchSeniorCaregiverSpecializedCare,
              state: data.specialized_care,
            },
            {
              title: "Mobility assisstance",
              description: "provide physical help to your client",
              action: searchSeniorCaregiverMobilityAssistance,
              state: data.mobility_assistance,
            },
            {
              title: "Companionship",
              description:
                "Provide company and be able to talk and enjoy time with your client",
              action: searchSeniorCaregiverCompanionship,
              state: data.companionship,
            },
          ]}
        />
      </motion.div>
    </AnimatePresence>
  );
};
