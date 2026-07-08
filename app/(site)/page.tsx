import { Hero } from "@/components/home/Hero";
import { ActionTicker } from "@/components/ui/ActionTicker";
import { ClubIntro } from "@/components/home/ClubIntro";
import { WhyJoin } from "@/components/home/WhyJoin";
import { Categories } from "@/components/home/Categories";
import { ActionPhotoStrip } from "@/components/ui/ActionPhotoStrip";
import { NewsFeed } from "@/components/home/NewsFeed";
import { ScheduleTeaser } from "@/components/home/ScheduleTeaser";
import { PartnersCta } from "@/components/home/PartnersCta";
import { SocialFollow } from "@/components/home/SocialFollow";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ActionTicker />
      <WhyJoin />
      <ClubIntro />
      <Categories />
      <ActionPhotoStrip />
      <NewsFeed />
      <ScheduleTeaser />
      <PartnersCta />
      <SocialFollow />
      <ContactTeaser />
    </>
  );
}
