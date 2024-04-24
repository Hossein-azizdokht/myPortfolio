// import '@/styles/globals.css'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../sass/pars.scss";
import Layout from "@/components/Layout";
import AnimatedCursor from "react-animated-cursor";
import { appWithTranslation } from "next-i18next";
// import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        trailingSpeed={5}
        outerScale={2}
        outerAlpha={0.2}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "orange",
        }}
        outerStyle={{
          border: "2px solid orange",
          boxShadow: "0 0 0 100px rgba(orange,0.2) inset",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
// export default appWithTranslation(App);
export default appWithTranslation(App);
