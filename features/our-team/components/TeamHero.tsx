import { PageHero } from "@/components/shared/sections/page-hero";
import { TEAM_DATA } from "../data";

const TeamHero = () => {
  return <PageHero data={TEAM_DATA.hero} />;
};

export default TeamHero;
