import FeaturesCoures from "@/components/FeaturesCoures";
import HeroSection from "@/components/HeroSection"
import TestimonialCars from "@/components/TestimonialCards";
import UpcominhWebinar from "@/components/UpcominhWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructers from "@/components/Instructers"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturesCoures />
      <WhyChooseUs />
      <TestimonialCars />
      <UpcominhWebinar />
      <Instructers />
      <Footer />
    </main>
  );
}
