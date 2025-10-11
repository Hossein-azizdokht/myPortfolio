import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "next-i18next";
import SectionTitle from "@/components/sectionTitle";
import GalleryItem from "./GalleryItem";
import GalleryLightbox from "./GalleryLightbox";

const ClientGallery = ({ galleryData = [] }) => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxData, setLightboxData] = useState({});

  // Ensure galleryData is an array
  const safeGalleryData = Array.isArray(galleryData) ? galleryData : [];

  // Predefined categories and extract unique categories from gallery data
  const categories = useMemo(() => {
    const predefinedCategories = ["all", "logo", "ui/ux", "development"];
    debugger;
    // Extract all categories from gallery data (flatten arrays)
    const dataCategories = new Set();
    safeGalleryData.forEach((item) => {
      if (item?.category && Array.isArray(item.category)) {
        item.category.forEach((cat) => {
          if (cat) {
            dataCategories.add(cat);
          }
        });
      } else if (item?.category) {
        // Handle legacy single category items
        const normalizedCat = item.category.toLowerCase().replace(/\s+/g, "");
        if (normalizedCat === "ui/ux" || normalizedCat === "uiux") {
          dataCategories.add("ui/ux");
        } else if (normalizedCat === "development" || normalizedCat === "dev") {
          dataCategories.add("development");
        } else if (normalizedCat === "logo") {
          dataCategories.add("logo");
        } else {
          dataCategories.add(item.category);
        }
      }
    });

    // Combine predefined categories with data categories, avoiding duplicates
    const allCategories = [...predefinedCategories];
    dataCategories.forEach((category) => {
      if (!predefinedCategories.includes(category)) {
        allCategories.push(category);
      }
    });

    return allCategories;
  }, [safeGalleryData]);

  // Filter data based on selected category
  const filteredData = useMemo(() => {
    if (selectedCategory === "all") {
      return safeGalleryData;
    }

    // Filter by category (handle both array and single category)
    return safeGalleryData.filter((item) => {
      if (Array.isArray(item?.category)) {
        return item.category.some((cat) => {
          // Normalize category for comparison
          const normalizedCat = cat.toLowerCase().replace(/\s+/g, "");
          const normalizedSelected = selectedCategory
            .toLowerCase()
            .replace(/\s+/g, "");

          // Handle specific mappings
          if (normalizedSelected === "ui/ux" || normalizedSelected === "uiux") {
            return normalizedCat === "ui/ux" || normalizedCat === "uiux";
          }
          if (
            normalizedSelected === "development" ||
            normalizedSelected === "dev"
          ) {
            return normalizedCat === "development" || normalizedCat === "dev";
          }
          if (normalizedSelected === "logo") {
            return normalizedCat === "logo";
          }

          return normalizedCat === normalizedSelected;
        });
      }

      // Handle single category items
      const normalizedCat = item?.category?.toLowerCase().replace(/\s+/g, "");
      const normalizedSelected = selectedCategory
        .toLowerCase()
        .replace(/\s+/g, "");

      if (normalizedSelected === "ui/ux" || normalizedSelected === "uiux") {
        return normalizedCat === "ui/ux" || normalizedCat === "uiux";
      }
      if (
        normalizedSelected === "development" ||
        normalizedSelected === "dev"
      ) {
        return normalizedCat === "development" || normalizedCat === "dev";
      }
      if (normalizedSelected === "logo") {
        return normalizedCat === "logo";
      }

      return normalizedCat === normalizedSelected;
    });
  }, [selectedCategory, safeGalleryData]);

  const showImage = (item) => {
    setShowLightbox(true);
    setLightboxData(item);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-4 !py-16">
        <SectionTitle
          title={t("gallery.title")}
          subTitle={t("gallery.subtitle")}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            // Get display label for category
            const getCategoryLabel = (cat) => {
              switch (cat) {
                case "all":
                  return t("gallery.all");
                case "logo":
                  return "Logo";
                case "ui/ux":
                  return "UI/UX";
                case "development":
                  return "Development";
                default:
                  return (
                    cat.charAt(0).toUpperCase() +
                    cat.slice(1).replace(/-/g, " ")
                  );
              }
            };

            // Get count for category
            const getCategoryCount = (cat) => {
              if (cat === "all") return safeGalleryData.length;

              return safeGalleryData.filter((item) => {
                if (Array.isArray(item?.category)) {
                  return item.category.some((category) => {
                    // Normalize category for comparison
                    const normalizedCat = category
                      .toLowerCase()
                      .replace(/\s+/g, "");
                    const normalizedSelected = cat
                      .toLowerCase()
                      .replace(/\s+/g, "");

                    // Handle specific mappings
                    if (
                      normalizedSelected === "ui/ux" ||
                      normalizedSelected === "uiux"
                    ) {
                      return (
                        normalizedCat === "ui/ux" || normalizedCat === "uiux"
                      );
                    }
                    if (
                      normalizedSelected === "development" ||
                      normalizedSelected === "dev"
                    ) {
                      return (
                        normalizedCat === "development" ||
                        normalizedCat === "dev"
                      );
                    }
                    if (normalizedSelected === "logo") {
                      return normalizedCat === "logo";
                    }

                    return normalizedCat === normalizedSelected;
                  });
                }

                // Handle single category items
                const normalizedCat = item?.category
                  ?.toLowerCase()
                  .replace(/\s+/g, "");
                const normalizedSelected = cat
                  .toLowerCase()
                  .replace(/\s+/g, "");

                if (
                  normalizedSelected === "ui/ux" ||
                  normalizedSelected === "uiux"
                ) {
                  return normalizedCat === "ui/ux" || normalizedCat === "uiux";
                }
                if (
                  normalizedSelected === "development" ||
                  normalizedSelected === "dev"
                ) {
                  return (
                    normalizedCat === "development" || normalizedCat === "dev"
                  );
                }
                if (normalizedSelected === "logo") {
                  return normalizedCat === "logo";
                }

                return normalizedCat === normalizedSelected;
              }).length;
            };

            const count = getCategoryCount(category);

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 py-1 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span>{getCategoryLabel(category)}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <GalleryItem
              key={item._id || index}
              item={item}
              onClick={() => showImage(item)}
            />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">{t("gallery.noItems")}</p>
          </div>
        )}

        {/* Lightbox */}
        <GalleryLightbox
          show={showLightbox}
          data={lightboxData}
          close={closeLightbox}
        />
      </div>
    </div>
  );
};

export default ClientGallery;
