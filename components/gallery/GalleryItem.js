import { useTranslation } from "next-i18next";

const GalleryItem = ({ item, onClick }) => {
  const { i18n } = useTranslation();

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={item.cover}
          alt={i18n.language === "fa" ? item.titlefa : item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {i18n.language === "fa" ? item.titlefa : item.title}
        </h3>

        {item.desc && (
          <p className="text-gray-600 text-sm line-clamp-3">{item.desc}</p>
        )}

        {item.category && (
          <div className="mt-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        )}

        {item.icons && item.icons.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.icons.slice(0, 3).map((icon, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {icon}
              </span>
            ))}
            {item.icons.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{item.icons.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
