import CTASection from "@/components/shared/sections/cta/CTASection";
import PageHero from "@/components/shared/sections/page-hero/PageHero";

import { AgentDirectory } from "@/features/find-an-agent/components";
import { FIND_AGENT_CTA } from "@/features/find-an-agent/data/cta";
import { FIND_AGENT_HERO } from "@/features/find-an-agent/data/hero";

export default function FindAgentPage() {
  return (
    <>
      <PageHero data={FIND_AGENT_HERO} />

      <AgentDirectory />

      <CTASection data={FIND_AGENT_CTA} />
    </>
  );
}
