// import SlideShow from "@/components/Home/Hero/SlideShow";
import Hero from "@/containers/home/hero";
import MySkills from "@/containers/home/mySkills";
import nextI18nextConfig from "../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TestimonialSlide from "@/containers/home/testimonialSlide/TestimonialSlide";
import Timeline from "@/containers/home/timeline/timeline";
import PortofolioSlide from "@/containers/home/portofolioSlide/PortofolioSlide";
import OurCustomers from "@/containers/home/OurCustomers/OurCustomers";

function Home({ testimationData, portfolioData, timelineData }) {
  return (
    <>
      {/* Hero SECTION */}
      <Hero />

      {/* My Skills SECTION------------------------- */}
      <MySkills />

      {/* My Portofolio SECTION------------------------- */}
      <PortofolioSlide data={portfolioData} />

      {/* Timeline SECTION------------------------- */}
      <Timeline data={timelineData} />

      {/* Testimation SECTION------------------------- */}
      <TestimonialSlide data={testimationData} />

      {/* Customers SECTION------------------------- */}
      <OurCustomers />
    </>
  );
}
export default Home;

// Server Side request ---------------------------------------------------------------

export async function getServerSideProps(context) {
  // get portfolio data
  const portfolioResult = await fetch("http://localhost:3000/api/gallery");
  const portfolioData = await portfolioResult.json();

  // get timeline data
  const timelineResult = await fetch("http://localhost:3000/api/timeline");
  const timelineData = await timelineResult.json();

  // get testimation data
  const testimationResult = await fetch(
    "http://localhost:3000/api/testimation"
  );
  const testimationData = await testimationResult.json();

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale ?? ["en", "fa"],
        ["common"],
        nextI18nextConfig
      )),
      portfolioData,
      testimationData,
      timelineData,
    },
  };
}
