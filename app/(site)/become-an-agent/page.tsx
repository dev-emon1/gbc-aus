import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import { AGENT_HERO } from "@/features/agent";
import AgentHighlights from "@/features/agent/components/AgentHighlights";
import ApplicationProcess from "@/features/agent/components/ApplicationProcess";
import DownloadForm from "@/features/agent/components/DownloadForm";
import WhyPartner from "@/features/agent/components/WhyPartner";
import { FIND_AGENT_CTA } from "@/features/find-an-agent/data/cta";

export default function BecomeAgentPage() {
  return (
    <>
      <PageHero data={AGENT_HERO} />
      <AgentHighlights />
      <WhyPartner />
      <ApplicationProcess />
      <DownloadForm />
      <CTASection data={FIND_AGENT_CTA} />
    </>
  );
}
