import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/features/auth/server/auth.queries";
import { HeroSection } from "@/components/home/hero-section";
import { PopularCategories } from "@/components/home/popular-category";
import { FeaturesSection } from "@/components/home/feature-section";
import FaqSection from "@/components/home/faq";
import { Testimonial } from "@/components/home/testimonial";
import { Stats } from "@/components/home/stats-section";
import { FeaturedJob } from "@/components/home/featured-job";
export default async function Home() {
  const user = await getCurrentUser();
  console.log("user data: ", user);

  return (
    <main className="mt-20 max-w-7xl mx-auto">
      <HeroSection />
      <PopularCategories />
      <FeaturedJob />
      <FeaturesSection />
      <Stats />
      <FaqSection />
      <Testimonial />
    </main>
  );
}
