import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../next-i18next.config";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/sectionTitle";
import connection from "db";
import GalleryModel from "@/models/galleryModel";

// Dynamically import the gallery component to avoid hydration issues
const ClientGallery = dynamic(
  () => import("@/components/gallery/ClientGallery"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle title="Gallery" subTitle="Loading..." />
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    ),
  }
);

const Gallery = ({ galleryData = [] }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title={t("gallery.title")}
            subTitle={t("gallery.subtitle")}
          />
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return <ClientGallery galleryData={galleryData} />;
};

export default Gallery;

export async function getServerSideProps(context) {
  try {
    await connection();
    const galleryData = await GalleryModel.find({});

    return {
      props: {
        ...(await serverSideTranslations(
          context.locale ?? "en",
          ["common"],
          nextI18nextConfig
        )),
        galleryData: JSON.parse(JSON.stringify(galleryData || [])),
      },
    };
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return {
      props: {
        ...(await serverSideTranslations(
          context.locale ?? "en",
          ["common"],
          nextI18nextConfig
        )),
        galleryData: [],
      },
    };
  }
}
