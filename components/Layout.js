import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "",
  description: "حسین عزیزدخت",
  keywords: "طراح گرافیک، فرانت، برناه نویس فرانت، frontend developer, graphic designer,",
  children: "",
};
