import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import AnnualCalendar from "@/features/student-life/events-workshops/components/AnnualCalendar";
import EventCTA from "@/features/student-life/events-workshops/components/EventCTA";
// import FeaturedEvent from "@/features/student-life/events-workshops/components/FeaturedEvent";
import StudentActivities from "@/features/student-life/events-workshops/components/StudentActivities";
import UpcomingEvents from "@/features/student-life/events-workshops/components/UpcomingEvents";
import WorkshopCategories from "@/features/student-life/events-workshops/components/WorkshopCategories";

import {
  EVENTS_WORKSHOPS_CTA,
  EVENTS_WORKSHOPS_HERO,
} from "@/features/student-life/events-workshops/data/events-workshops";

export default function EventsWorkshopsPage() {
  return (
    <>
      <PageHero data={EVENTS_WORKSHOPS_HERO} />

      {/* <FeaturedEvent /> */}

      <UpcomingEvents />

      <WorkshopCategories />

      <StudentActivities />

      <AnnualCalendar />

      <EventCTA />

      <CTASection data={EVENTS_WORKSHOPS_CTA} />
    </>
  );
}
