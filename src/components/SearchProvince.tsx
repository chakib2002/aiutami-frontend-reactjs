import React from "react";
import { province } from "../state/types/enums";
import { DropDown } from "./DropDown";
import { Next } from "./Next";
import { Casename } from "../state/types/enums";
import { AnimatePresence, motion } from "framer-motion";

export const SearchProvince = ({
  type,
  next,
  action,
}: {
  type: string;
  next: Function;
  action: Function;
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="province_component"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <DropDown
            title={Casename.Province}
            name={type}
            options={[
              province.alger,
              province.bejaia,
              province.blida,
              province.boumerdes,
              province.oran,
              province.setif,
              province.tipaza,
              province.tiziouzou,
            ]}
            width=" w-56"
            theAction={action}
          />
        </div>
        <div className="m-auto text-center lg:text-right my-5">
          <Next action={next} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
