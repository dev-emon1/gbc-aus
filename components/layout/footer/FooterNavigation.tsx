import ContactColumn from "./ContactColumn";
import FooterColumn from "./FooterColumn";

const studyLinks = [
  {
    title: "Find Your Course",
    href: "/courses",
  },
  {
    title: "Why GBC",
    href: "/why-gbc",
  },
  {
    title: "Life In Australia",
    href: "/life-in-australia",
  },
  {
    title: "Apply Now",
    href: "/apply-now",
  },
];

const supportLinks = [
  {
    title: "Meet An Advisor",
    href: "/meet-an-advisor",
  },
  {
    title: "Find An Agent",
    href: "/find-an-agent",
  },
  {
    title: "Become An Agent",
    href: "/become-an-agent",
  },
  {
    title: "Student Services",
    href: "/student-life/student-services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
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

type FooterNavigationProps = {
  mobile?: boolean;
};

export default function FooterNavigation({
  mobile = false,
}: FooterNavigationProps) {
  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
        <FooterColumn title="Study" links={studyLinks} />

        <FooterColumn title="Support" links={supportLinks} />

        <FooterColumn title="Popular Courses" links={courseLinks} />

        <ContactColumn />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <FooterColumn title="Study" links={studyLinks} />

      <FooterColumn title="Support" links={supportLinks} />

      <FooterColumn title="Popular Courses" links={courseLinks} />
    </div>
  );
}
