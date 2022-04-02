import React from "react";
import { province } from "../state/types/enums";
import { DropDown } from "./DropDown";
import { Next } from "./Next";

export const SearchProvince = () => {
  return (
    <div>
      <div>
        <DropDown
          name="Province"
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
          theAction={() => {}}
        />
      </div>
      <div className="m-auto text-center lg:text-right my-5">
        <Next />
      </div>
    </div>
  );
};
