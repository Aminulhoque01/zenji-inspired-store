import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <AnnouncementBar />

      <Header />

      <Hero />

      <section
        id="shop"
        className="
          relative
          z-10
          min-h-screen
          bg-[#f4f2ec]
          px-5
          py-24
          text-black
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Collection // Origin_Drop
          </p>

          <h2 className="mt-3 font-display text-6xl tracking-[-0.05em] sm:text-8xl">
            LATEST_DROPS
          </h2>
        </div>
      </section>
    </main>
  );
}