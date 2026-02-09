import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PackagesPreview from "@/components/sections/PackagesPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import WhyRedditTeaser from "@/components/sections/WhyRedditTeaser";
import HomeFAQ from "@/components/sections/HomeFAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PackagesPreview />
      <HowItWorks />
      <Testimonials />
      <WhyRedditTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
