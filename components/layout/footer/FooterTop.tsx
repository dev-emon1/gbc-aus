import Link from "next/link";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

const studyLinks = [
  { title: "Find Your Course", href: "/courses" },
  { title: "Why GBC", href: "/why-gbc" },
  { title: "Life In Australia", href: "/life-in-australia" },
  { title: "Apply Now", href: "/apply-now" },
];

const supportLinks = [
  { title: "Meet An Advisor", href: "/meet-an-advisor" },
  { title: "Find An Agent", href: "/find-an-agent" },
  { title: "Student Services", href: "/student-services" },
  { title: "Contact", href: "/contact" },
];

const courseLinks = [
  { title: "Information Technology", href: "#" },
  { title: "Leadership & Management", href: "#" },
  { title: "Marketing & Communications", href: "#" },
  { title: "Human Resources", href: "#" },
  { title: "Project Management", href: "#" },
];

export default function FooterTop() {
  return (
    <>
      {/* Accreditation Strip */}
      <div className="border-b border-slate-200">
        <div className={`${CONTAINER} grid gap-5 py-8 md:grid-cols-3`}>
          {[
            {
              label: "CRICOS",
              value: "03208D",
            },
            {
              label: "RTO",
              value: "91707",
            },
            {
              label: "Campus",
              value: "Sydney, Australia",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-[#D84D95]">
                {item.label}
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className={CONTAINER}>
        <div className="grid gap-16 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}

          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              George Brown College
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              Trusted Australian education provider offering industry-focused
              learning pathways, practical training and career-ready outcomes.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <MapPin size={18} className="mt-1 text-[#D84D95]" />

                <p className="text-slate-600">
                  Level 5, 191 Thomas Street,
                  <br />
                  Haymarket NSW 2000
                </p>
              </div>

              <div className="flex gap-4">
                <Phone size={18} className="text-[#D84D95]" />

                <p className="text-slate-600">+61 2 9279 4949</p>
              </div>

              <div className="flex gap-4">
                <Mail size={18} className="text-[#D84D95]" />

                <p className="text-slate-600">info@georgebrown.nsw.edu.au</p>
              </div>
            </div>
          </div>
          {/* Study */}
          <FooterColumn title="Study" links={studyLinks} />

          {/* Support */}
          <FooterColumn title="Support" links={supportLinks} />

          {/* Popular Courses */}
          <FooterColumn title="Popular Courses" links={courseLinks} />

          {/* Advisor Card */}
          <AdvisorCard />
        </div>
      </div>
    </>
  );
}

function AdvisorCard() {
  return (
    <div className="self-start -mt-12">
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(15,23,42,0.10)]">
        {/* Pink Glow */}
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#D84D95]/7 blur-3xl" />

        {/* Green Glow */}
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[#B7D531]/7 blur-3xl" />

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/8 px-4 py-2 text-xs font-semibold text-[#D84D95]">
            Student Support
          </span>

          <h3 className="mt-5 text-[30px] font-bold leading-[1.15] text-slate-900">
            Need Guidance?
          </h3>

          <p className="mt-4 text-[15px] leading-8 text-slate-600">
            Talk to a GBC advisor for course selection, admission guidance and
            career planning support.
          </p>

          <Link
            href="/meet-an-advisor"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D84D95] to-[#C84289] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(216,77,149,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(216,77,149,0.35)]"
          >
            Meet An Advisor
          </Link>

          <div className="mt-8 border-t border-slate-100 pt-5">
            <p className="text-sm text-slate-500">Monday – Friday</p>

            <p className="mt-1 font-semibold text-slate-900">
              Admissions Team Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type FooterColumnProps = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-[#D84D95]"
            >
              <span>{link.title}</span>

              <ArrowRight
                size={14}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
