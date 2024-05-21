import CategoriesSection from "@/component/shared/CategoriesSection/CategoriesSection";
import FlashSaleSection from "@/component/shared/FlashSaleSection/FlashSaleSection";
import HeroSection from "@/component/shared/HeroSection/HeroSection";
import TrendingProductsSection from "@/component/shared/TrendingProductsSection/TrendingProductsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FlashSaleSection />
      <CategoriesSection />
      <TrendingProductsSection />
    </>
  );
}
