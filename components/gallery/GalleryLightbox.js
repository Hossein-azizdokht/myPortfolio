import FadeInPanel from "@/components/animations/fadeInPanel";
import { useTranslation } from "next-i18next";
import { TfiClose } from "react-icons/tfi";

const GalleryLightbox = (props) => {
  const { t, i18n } = useTranslation();

  if (!props.show || !props.data) return null;

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-[100] bg-slate-800 bg-opacity-90 p-4 md:p-12">
      <div
        onClick={props.close}
        className="text-white absolute top-5 right-5 md:top-10 md:right-10 bg-slate-900 bg-opacity-50 hover:bg-slate-950 hover:scale-110 z-50 active:bg-black active:bg-opacity-50 transition-all p-3 rounded-lg cursor-pointer"
      >
        <TfiClose size={30} />
      </div>

      <div className="h-full w-full flex items-center justify-center relative">
        <div className="max-w-6xl w-full max-h-full relative">
          {/* Header with title and category */}
          <div
            className={`flex items-center text-white mb-4 ${
              i18n.language === "fa" ? "" : "flex-row-reverse"
            }`}
          >
            <FadeInPanel>
              <div
                className={`text-2xl md:text-3xl font-light ${
                  i18n.language === "fa"
                    ? "border-l-slate-400 border-l pl-4"
                    : "border-r-slate-400 border-r pr-4"
                }`}
              >
                {i18n.language === "fa" ? props.data.titlefa : props.data.title}
              </div>
            </FadeInPanel>

            {props.data.category && (
              <div className="ml-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {props.data.category}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          {props.data.desc && (
            <FadeInPanel>
              <div className="text-white mb-4 text-lg opacity-90">
                {props.data.desc}
              </div>
            </FadeInPanel>
          )}

          {/* Icons/Tags */}
          {props.data.icons && props.data.icons.length > 0 && (
            <FadeInPanel>
              <div className="flex flex-wrap gap-2 mb-4">
                {props.data.icons.map((icon, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </FadeInPanel>
          )}

          {/* Main Image */}
          <FadeInPanel>
            <div className="relative">
              <img
                src={props.data.cover}
                alt={
                  i18n.language === "fa" ? props.data.titlefa : props.data.title
                }
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </FadeInPanel>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
