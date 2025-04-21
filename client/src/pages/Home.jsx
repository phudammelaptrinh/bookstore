import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import CategoryMenu from "../components/CategoryMenu";
import ProductGrid from "../components/ProductGrid";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BannerCarousel />
      <CategoryMenu />
      <ProductGrid />
      <FeaturedSection />
      <Footer />
    </>
  );
}
