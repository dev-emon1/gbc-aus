import { PageHero } from "@/components/shared/sections/page-hero";
import { ABOUT_DATA } from "../data";

export default function AboutHero() {
  return <PageHero data={ABOUT_DATA.hero} />;
}
