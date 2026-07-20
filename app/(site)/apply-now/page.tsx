import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";
import { ApplyDirectory } from "@/features/apply/components";
import { APPLY_CTA } from "@/features/apply/data/cta";
import { APPLY_HERO } from "@/features/apply/data/hero";

export default function ApplyPage() {
  return (
    <>
      <PageHero data={APPLY_HERO} />

      <ApplyDirectory />

      <CTASection data={APPLY_CTA} />
    </>
  );
}
