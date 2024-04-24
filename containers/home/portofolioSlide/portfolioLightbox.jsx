import FadeInPanel from "@/components/animations/fadeInPanel";
import { useTranslation } from "next-i18next";
import { TfiClose } from "react-icons/tfi";

const PortfolioLightbox = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {props.show && (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-[100] bg-slate-800 bg-opacity-80 p-12">
          <div
            onClick={props.close()}
            className="text-white absolute top-5 right-10 bg-slate-900 bg-opacity-50 hover:bg-slate-950 hover:scale-110 z-50 active:bg-black active:bg-opacity-50 transition-all p-3 rounded-lg"
          >
            <TfiClose size={30} />
          </div>
          <div className="h-full w-auto flex items-center relative">
            <div className="max-w-[1000px] block m-auto relative">
              <div
                className={`flex items-center text-white mb-2 ${
                  i18n.language === "fa" ? "" : "flex-row-reverse"
                }`}
              >
                <FadeInPanel>
                  <div
                    className={`text-2xl font-light  ${
                      i18n.language === "fa"
                        ? "border-l-slate-400 border-l pl-4"
                        : "border-r-slate-400 border-r pr-4"
                    }`}
                  >
                    {i18n.language === "fa"
                      ? props.data.titlefa
                      : props.data.title}
                    {}
                  </div>
                </FadeInPanel>
                <ul className="pl-3 mb-0 mr-3 flex">
                  {props.data.icons?.map((item, index) => (
                    <FadeInPanel key={index}>
                      <li className="text-sm my-1 mx-2">{item}</li>
                    </FadeInPanel>
                  ))}
                </ul>
              </div>
              <FadeInPanel>
                <img src={props.data.cover} />
              </FadeInPanel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioLightbox;
