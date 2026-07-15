import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../next-i18next.config";
import SectionTitle from "@/components/sectionTitle";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-62px)] bg-gradient-to-b from-amber-50/80 via-white to-slate-50 pb-20">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title={t("aboutMe.pageTitle")}
          subTitle={t("aboutMe.subtitle")}
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-yellow-300/50 via-orange-200/30 to-transparent blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl">
              <Image
                src="/images/about-me.png"
                alt={t("aboutMe.name")}
                width={640}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              {t("aboutMe.name")}
            </h2>
            <p className="mt-2 text-lg text-orange-500 font-light">
              {t("aboutMe.role")}
            </p>

            <p className="mt-6 text-slate-600 leading-8 text-base md:text-lg">
              {t("aboutMe.bio1")}
            </p>
            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg">
              {t("aboutMe.bio2")}
            </p>

            <ul className="mt-8 space-y-3">
              {["point1", "point2", "point3"].map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <span>{t(`aboutMe.${key}`)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
              >
                {t("aboutMe.ctaGallery")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:border-orange-400 hover:text-orange-500"
              >
                {t("aboutMe.ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale ?? "fa",
        ["common"],
        nextI18nextConfig
      )),
    },
  };
}
