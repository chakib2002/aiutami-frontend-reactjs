import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  decrementPageNumberTutor,
  searchTutorLevel,
  searchTutorSchoolYear,
  searchTutorSubject,
} from "../state/Slices/searchTutorSlice";
import { Casename, level, LevelComponentUseCase } from "../state/types/enums";
import { DropDown } from "./DropDown";
import { Levels } from "./Levels";
import { Previous } from "./Previous";
import { Submit } from "./Submit";

export const SearchFilterTutor = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="filter_tutors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Levels
          name="Level"
          info={[
            {
              case: level.primary_school,
              action: searchTutorLevel,
            },
            {
              case: level.middle_school,
              action: searchTutorLevel,
            },
            {
              case: level.high_school,
              action: searchTutorLevel,
            },
          ]}
          type={LevelComponentUseCase.search}
          width="lg:mx-5 "
        />

        <div className="mx-5 my-2 lg:flex lg:justify-between">
          <DropDown
            title={Casename.subject}
            name={Casename.SearchSubject}
            options={[
              "Math",
              "Physics",
              "Science",
              "English",
              "French",
              "Computer science",
            ]}
            theAction={searchTutorSubject}
            width="w-60
          lg:w-52"
          />
          <DropDown
            title={Casename.school_year}
            name={Casename.SearchSchoolYear}
            options={["First", "Second", "Third", "Fourth", "Fifth"]}
            width="w-60
          lg:w-52"
            theAction={searchTutorSchoolYear}
          />
        </div>
        <div className="mx-5 flex justify-between mb-5">
          <Previous action={decrementPageNumberTutor} />
          <Submit title="Search" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
