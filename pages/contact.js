import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../next-i18next.config";
import SectionTitle from "@/components/sectionTitle";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const contactItems = [
  {
    key: "phone",
    icon: FiPhone,
    href: "tel:+989375872490",
    external: false,
  },
  {
    key: "email",
    icon: FiMail,
    href: "mailto:h.azizdokht@gmail.com",
    external: false,
  },
  {
    key: "linkedin",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/hossein-azizdokht",
    external: true,
  },
  {
    key: "instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/hogon.graphic",
    external: true,
  },
  {
    key: "location",
    icon: FiMapPin,
    href: null,
    external: false,
  },
];

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-62px)] bg-gradient-to-b from-slate-50 via-white to-orange-50/40 pb-20">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title={t("contact.pageTitle")}
          subTitle={t("contact.subtitle")}
        />

        <p className="mt-6 max-w-2xl text-slate-500 text-lg leading-relaxed">
          {t("contact.description")}
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map(({ key, icon: Icon, href, external }) => {
            const value = t(`contact.items.${key}.value`);
            const label = t(`contact.items.${key}.label`);
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm text-slate-400 font-light">{label}</p>
                  <p className="mt-1 text-lg text-slate-800 font-medium ltr text-left">
                    {value}
                  </p>
                </div>
              </>
            );

            const className =
              "flex items-center gap-4 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md";

            if (href) {
              return (
                <a
                  key={key}
                  href={href}
                  className={className}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={key} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
