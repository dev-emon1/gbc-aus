import { PageHero } from "@/components/shared/sections/page-hero";

import { COURSES_DATA } from "../data";

export default function CoursesHero() {
  return <PageHero data={COURSES_DATA.hero} />;
}
