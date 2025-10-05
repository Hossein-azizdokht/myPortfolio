// import SlideShow from "@/components/Home/Hero/SlideShow";
import Hero from "@/containers/home/hero";
import MySkills from "@/containers/home/mySkills";
import nextI18nextConfig from "../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TestimonialSlide from "@/containers/home/testimonialSlide/TestimonialSlide";
import Timeline from "@/containers/home/timeline/timeline";
import PortofolioSlide from "@/containers/home/portofolioSlide/PortofolioSlide";
import OurCustomers from "@/containers/home/OurCustomers/OurCustomers";
import connection from "db";
import GalleryModel from "@/models/galleryModel";
import TimelineModel from "@/models/timelineModel";
import TestimationModel from "@/models/testimationModel";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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
  await connection();

  const [portfolioData, timelineData, testimationData] = await Promise.all([
    GalleryModel.find({}),
    TimelineModel.find({}),
    TestimationModel.find({}),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
        nextI18nextConfig
      )),
      portfolioData: JSON.parse(JSON.stringify(portfolioData)),
      timelineData: JSON.parse(JSON.stringify(timelineData)),
      testimationData: JSON.parse(JSON.stringify(testimationData)),
    },
  };
}
