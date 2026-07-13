"use client";

import { useState } from "react";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

import { CONTACT_CONTENT } from "../data/contact";

import { Clock3, Mail, MapPin, Phone, ScrollText } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

import GoogleMap from "./GoogleMap";

export default function ContactFormSection() {
  const section = CONTACT_CONTENT.form;

  const [newsletter, setNewsletter] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      {/* Ambient */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[170px]" />

      <div className={CONTAINER}>
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
          <div className="grid xl:grid-cols-[1.45fr_.75fr]">
            {/* Contact Form */}

            <MotionReveal>
              <div className="border-b border-slate-200 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                  Contact Form
                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {section.description}
                </p>

                <MotionStagger className="mt-10 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      placeholder="First Name"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]"
                    />

                    <input
                      placeholder="Last Name"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]"
                    />

                    <input
                      placeholder="Phone Number"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <select className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]">
                      <option>Area of Interest</option>

                      <option>Business</option>

                      <option>Information Technology</option>

                      <option>Hospitality</option>

                      <option>English Programs</option>
                    </select>

                    <input
                      placeholder="Country of Citizenship"
                      className="h-14 rounded-2xl border border-slate-200 px-5 outline-none transition focus:border-[#D84D95]"
                    />
                  </div>

                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full rounded-3xl border border-slate-200 p-5 outline-none transition focus:border-[#D84D95]"
                  />

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-slate-300 accent-[#D84D95]"
                    />

                    <span className="leading-7 text-slate-600">
                      I would like to receive news, updates and information from
                      George Brown College.
                    </span>
                  </label>

                  <button className="rounded-full bg-[#D84D95] px-8 py-4 font-semibold text-white transition hover:bg-[#C73D86]">
                    {section.buttonLabel}
                  </button>
                </MotionStagger>
              </div>
            </MotionReveal>

            {/* Right Side */}

            <MotionReveal delay={0.08}>
              <div>
                {/* Contact Information */}

                <div className="h-full bg-slate-50/70 p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                    Contact Information
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-slate-900">
                    Get in Touch
                  </h3>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
                        <Phone size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Phone</p>

                        <p className="font-semibold text-slate-900">
                          {CONTACT_CONTENT.details.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
                        <Mail size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Email</p>

                        <p className="break-all font-semibold text-slate-900">
                          {CONTACT_CONTENT.details.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
                        <MapPin size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Address</p>

                        <p className="leading-7 text-slate-700">
                          {CONTACT_CONTENT.details.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 text-[#D84D95]">
                        <Clock3 size={22} />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Office Hours</p>

                        <p className="font-medium text-slate-700">
                          {CONTACT_CONTENT.details.officeHours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}

                  <div className="mt-10 border-t border-slate-200 pt-8">
                    <h4 className="mb-5 text-lg font-bold text-slate-900">
                      Connect With Us
                    </h4>

                    <div className="flex gap-4">
                      <a
                        href={CONTACT_CONTENT.details.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:border-[#D84D95] hover:bg-[#D84D95] hover:text-white"
                      >
                        <FaFacebookF size={20} />
                      </a>

                      <a
                        href={CONTACT_CONTENT.details.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:border-[#D84D95] hover:bg-[#D84D95] hover:text-white"
                      >
                        <ScrollText size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.16}>
            <div className="mt-10">
              <GoogleMap />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
