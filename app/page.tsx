import Image from "next/image";
import avatar from "@/public/images/test_avatar.png";
import GithubWidget from "@/components/widgets/github/GithubWidget";
import LinkedinWidget from "@/components/widgets/linkedin/LinkedinWidget";
import MaltWidget from "@/components/widgets/malt/MaltWidget";
// import MapsWidget from "@/components/widgets/maps/MapsWidget";
// import ChatbotWidget from "@/components/widgets/chatbot-perso/ChatbotWidget";
import BuyMeACoffeeWidget from "@/components/widgets/buymeacofffe/BuyMeACoffeeWidget";
import SpotifyWidget from "@/components/widgets/spotify/SpotifyWidget";
import InstagramWidget from "@/components/widgets/instagram/InstagramWidget";
import DiscordWidget from "@/components/widgets/discord/DiscordWidget";
// import MapsWidget from "@/components/widgets/maps/MapsWidget";
// import VScodeWidget from "@/components/widgets/vscode/VScodeWidget";

const HeroSection = () => {
  return (
    <section className="p-10 pb-3 md:pb-5 flex items-center justify-center flex-col lg:flex-row lg:space-x-8">
      <Image
        alt="avatar"
        src={avatar}
        className="rounded-full m-2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 flex justify-center items-center"
      />
      <div className="m-2 flex flex-col font-semibold text-xl md:text-3xl w-full lg:w-fit items-center lg:items-start justify-center space-y-2">
        <h1 className="lowercase">@Sitrixx</h1>
        <h1 className="font-bold">Full-Stack Developer</h1>
      </div>
    </section>
  );
};

const WidgetsSection = () => {
  return (
    <section className="flex justify-center flex-col items-center lg:grid lg:grid-cols-column-layout lg:grid-rows-row-layout lg:justify-end lg:gap-x-8 lg:gap-y-4">
      <GithubWidget username="Sitrixx" />
      <LinkedinWidget />
      <MaltWidget />
      <InstagramWidget />
      <BuyMeACoffeeWidget />
      <SpotifyWidget />
      <DiscordWidget />
      {/* <MapsWidget /> */}
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WidgetsSection />
      <div className="w-full p-8"></div>
    </main>
  );
}
