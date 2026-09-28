import AboutZenji from "../components/AboutZenji";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestDrops from "../components/LatestDrops";
import OriginReveal from "../components/OriginReveal";
import ScrollImageStack from "../components/ScrollImageStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <AnnouncementBar />

      <Header />

      <Hero />

      <LatestDrops/>
      <OriginReveal/>
      <ScrollImageStack/>
      <AboutZenji/>
      <Footer/>
    </main>
  );
}