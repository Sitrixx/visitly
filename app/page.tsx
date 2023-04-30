import Image from "next/image";
import avatar from "@/public/images/test_avatar.png";
import GithubWidget from "@/components/widgets/github/GithubWidget";
import LinkedinWidget from "@/components/widgets/linkedin/LinkedinWidget";
import MaltWidget from "@/components/widgets/malt/MaltWidget";
// import MapsWidget from "@/components/widgets/maps/MapsWidget";
import ChatbotWidget from "@/components/widgets/chatbot-perso/ChatbotWidget";
import BuyMeACoffeeWidget from "@/components/widgets/buymeacofffe/BuyMeACoffeeWidget";
import SpotifyWidget from "@/components/widgets/spotify/SpotifyWidget";
import VScodeWidget from "@/components/widgets/vscode/VScodeWidget";

const HeroSection = () => {
  return (
    <section className="p-10 pb-3 md:pb-5 flex items-center justify-center flex-row">
      <Image
        alt="avatar"
        src={avatar}
        className="rounded-full m-2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 flex justify-center items-center"
      />
      <h1 className="m-2 font-bold text-xl md:text-3xl lowercase">@Sitrixx</h1>
    </section>
  );
};

const WidgetsSection = () => {
  return (
    <section className="flex justify-center flex-col items-center">
      <h1 className="font-bold m-6 text-xl md:text-2xl">LINKS</h1>
      <GithubWidget username="Sitrixx" />
      <LinkedinWidget />
      <MaltWidget />
      <BuyMeACoffeeWidget />
      <h1 className="font-bold m-6 md:m-8 text-xl md:text-2xl">UTILS</h1>
      <ChatbotWidget />
      <SpotifyWidget />
      <VScodeWidget />
      {/* <MapsWidget /> */}
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WidgetsSection />
    </main>
  );
}
