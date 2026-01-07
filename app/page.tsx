import { Button } from "@/components/ui/button";

import HeroSection38 from "@/app/hero-section-38/page";
import AboutUsPage from "@/app/about-us-page-22/page";
import FeaturesPage from "@/app/features-section-06/page";
import HeroSection25 from "@/app/hero-section-25/page";

export default function Home() {
  return (
    <div>
      <HeroSection38/>
      <AboutUsPage />
      <FeaturesPage />      
      <HeroSection25 />
    </div>
  );
}
