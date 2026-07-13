import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";
import {
  BudgetCalculator,
  CostOverview,
  ExpenseBreakdown,
  FAQSection,
  SavingTips,
  StudentDiscounts,
} from "@/features/life-in-australia/cost-of-living/components";
import {
  COST_OF_LIVING_CTA,
  COST_OF_LIVING_HERO,
} from "@/features/life-in-australia/cost-of-living/data/cost-of-living";

export default function CostOfLivingPage() {
  return (
    <>
      <PageHero data={COST_OF_LIVING_HERO} />

      <CostOverview />
      <ExpenseBreakdown />
      <BudgetCalculator />
      <SavingTips />
      <StudentDiscounts />
      <FAQSection />

      <CTASection data={COST_OF_LIVING_CTA} />
    </>
  );
}
