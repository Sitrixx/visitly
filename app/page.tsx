import Image from "next/image";
import avatar from "../public/images/test_avatar.png";
import GithubWidget from "../components/widgets/github/GithubWidget";
import LinkedinWidget from "../components/widgets/linkedin/LinkedinWidget";
import MaltWidget from "../components/widgets/malt/MaltWidget";
import BuyMeACoffeWidget from "../components/widgets/buymeacofffe/BuyMeACoffeeWidget";

export default function Home() {
  return (
    <main>
      <section className="p-10 flex items-center justify-center">
        <Image
          alt="avatar"
          src={avatar}
          className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 flex justify-center items-center"
        />
      </section>
      <section className="flex justify-center flex-col items-center">
        <GithubWidget username="Sitrixx" />
        <LinkedinWidget />
        <MaltWidget />
        <BuyMeACoffeWidget />
      </section>
    </main>
  );
}
