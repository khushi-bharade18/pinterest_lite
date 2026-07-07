import WelcomeHero from "./WelcomeHero";
import CategoryChips from "./CategoryChips";
import FeaturedSection from "./FeaturedSection";

export default function HomeLanding() {
  return (
    <div className="mx-auto pb-10 space-y-12">
      <WelcomeHero />
      <CategoryChips />
      <FeaturedSection />
    </div>
  );
}
