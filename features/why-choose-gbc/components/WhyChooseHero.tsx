import React from "react";
import { WHY_CHOOSE_DATA } from "../data";
import { PageHero } from "@/components/shared/sections/page-hero";

const WhyChooseHero = () => {
  return (
    <>
      <PageHero data={WHY_CHOOSE_DATA.hero} />
    </>
  );
};

export default WhyChooseHero;
