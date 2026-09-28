import AnnouncementBar from "@/src/components/layout/AnnouncementBar";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";

 
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar/>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}