// import AboutZenji from "../components/AboutZenji";
// import AnnouncementBar from "../components/AnnouncementBar";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import LatestDrops from "../components/LatestDrops";
// import OriginReveal from "../components/OriginReveal";
// import ScrollImageStack from "../components/ScrollImageStack";

import AboutZenji from "../../components/home/AboutZenji";
import Hero from "../../components/home/Hero";
import LatestDrops from "../../components/home/LatestDrops";
import OriginReveal from "../../components/home/OriginReveal";
import ScrollImageStack from "../../components/home/ScrollImageStack";

 
 

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestDrops />
      <OriginReveal />
      <ScrollImageStack />
       <AboutZenji/>
    </>
  );
}