import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import Gallery from "@/components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* featured Room */}
      <Gallery />
      {/* News Letter */}
    </>
  )

}


export default Home;