import { CTASection } from "@/components/shared/sections/cta";
import React from "react";
import { TEAM_DATA } from "../data";

const TeamCTA = () => {
  return <CTASection data={TEAM_DATA.cta} />;
};

export default TeamCTA;
