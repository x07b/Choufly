import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import {
  Problem,
  HowItWorks,
  StockConfidence,
  Reservation,
} from "@/components/sections/product-story";
import { SearchDemo } from "@/components/sections/search-demo";
import { Merchants, Demand, WhyChoufly } from "@/components/sections/merchants";
import {
  Categories,
  LocalFocus,
  Principles,
  Personas,
  AppPreview,
  FinalCTA,
} from "@/components/sections/community";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <StockConfidence />
        <SearchDemo />
        <Reservation />
        <Merchants />
        <Demand />
        <WhyChoufly />
        <Categories />
        <LocalFocus />
        <Principles />
        <Personas />
        <AppPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
