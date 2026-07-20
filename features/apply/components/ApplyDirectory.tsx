"use client";

import { CONTAINER } from "@/constants/layout";

import ApplicationGrid from "./ApplicationGrid";
import ApplyHeader from "./ApplyHeader";
import HelpSection from "./HelpSection";
import ApplicationProcess from "./ApplicationProcess";

export default function ApplyDirectory() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,.08),transparent_35%)]" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className={`${CONTAINER} relative z-10`}>
        {/* Header */}

        <ApplyHeader />

        {/* Application Forms */}

        <ApplicationGrid />

        <ApplicationProcess />

        {/* Help */}

        <HelpSection />
      </div>
    </section>
  );
}
