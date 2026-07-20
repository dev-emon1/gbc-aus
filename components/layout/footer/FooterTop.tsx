import { CONTAINER } from "@/constants/layout";

import ContactColumn from "./ContactColumn";
import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";

const studyLinks = [
  { title: "Find Your Course", href: "/courses" },
  { title: "Why GBC", href: "/why-gbc" },
  { title: "Life In Australia", href: "/life-in-australia" },
  { title: "Apply Now", href: "/apply-now" },
];

const supportLinks = [
  { title: "Meet An Advisor", href: "/meet-an-advisor" },
  { title: "Find An Agent", href: "/find-an-agent" },
  { title: "Become An Agent", href: "/become-an-agent" },
  {
    title: "Student Services",
    href: "/student-life/student-services",
  },
  { title: "Contact", href: "/contact" },
];

const courseLinks = [
  {
    title: "Information Technology",
    href: "/courses/information-technology",
  },
  {
    title: "Leadership & Management",
    href: "/courses/leadership-and-management",
  },
  {
    title: "Marketing & Communications",
    href: "/courses/marketing-and-communications",
  },
  {
    title: "Human Resources",
    href: "/courses/human-resources",
  },
  {
    title: "Project Management",
    href: "/courses/project-management",
  },
];

export default function FooterTop() {
  return (
    <section className={CONTAINER}>
      <div className="py-14">
        {/* ---------------- Mobile ---------------- */}

        <div className="space-y-12 md:hidden">
          <FooterBrand />

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <FooterColumn title="Study" links={studyLinks} />

            <FooterColumn title="Support" links={supportLinks} />

            <FooterColumn title="Popular Courses" links={courseLinks} />

            <ContactColumn />
          </div>
        </div>

        {/* ---------------- Tablet / Laptop ---------------- */}

        <div className="hidden md:block xl:hidden">
          <div className="grid items-start gap-12 lg:grid-cols-[1.45fr_.9fr]">
            <FooterBrand />

            <ContactColumn />
          </div>

          <div className="mt-12 border-t border-slate-200/60 pt-10">
            <div className="grid grid-cols-3 gap-10">
              <FooterColumn title="Study" links={studyLinks} />

              <FooterColumn title="Support" links={supportLinks} />

              <FooterColumn title="Popular Courses" links={courseLinks} />
            </div>
          </div>
        </div>

        {/* ---------------- Desktop ---------------- */}

        <div className="hidden xl:grid xl:grid-cols-[1.35fr_.8fr_.8fr_.9fr_1fr] xl:gap-12">
          <FooterBrand />

          <FooterColumn title="Study" links={studyLinks} />

          <FooterColumn title="Support" links={supportLinks} />

          <FooterColumn title="Popular Courses" links={courseLinks} />

          <ContactColumn />
        </div>
      </div>
    </section>
  );
}
