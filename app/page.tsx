import Cover from "@/components/invitation/Cover";
import Hero from "@/components/invitation/Hero";
import CoupleSection from "@/components/invitation/CoupleSection";
import StorySection from "@/components/invitation/StorySection";
import EventDetails from "@/components/invitation/EventDetails";
import GallerySection from "@/components/invitation/GallerySection";
import VideoSection from "@/components/invitation/VideoSection";
import RsvpSection from "@/components/invitation/RsvpSection";
import WishesSection from "@/components/invitation/WishesSection";
import DonationSection from "@/components/invitation/DonationSection";
import ClosingFooter from "@/components/invitation/ClosingFooter";
import MusicToggle from "@/components/invitation/MusicToggle";

export default function Home() {
  return (
    <>
      <Cover />
      <MusicToggle />
      <div id="konten" className="flex flex-col">
        <Hero />
        <CoupleSection />
        <StorySection />
        <EventDetails />
        <GallerySection />
        <VideoSection />
        <RsvpSection />
        <WishesSection />
        <DonationSection />
        <ClosingFooter />
      </div>
    </>
  );
}