import React, { useState, useEffect } from "react";

import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Button, List, ListItem, Popover } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const languageMap = {
  fa: { label: "فارسی", dir: "rtl", active: false, flag: 'IR' },
  // ar: { label: "العربية", dir: "rtl", active: false, flag: 'AR' },
  en: { label: "English", dir: "ltr", active: true, flag: 'EN' },
};

const LanguageSelect = () => {
  const { t } = useTranslation();
  const [isRTL, setIsRTL] = useState(true);
  const selected =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "fa"
      : "";


  const [menuAnchor, setMenuAnchor] = useState(null);
  useEffect(() => {
    document.body.dir = languageMap[selected]?.dir;
  }, [menuAnchor, selected]);

  const changeLanguageHandler = (item) => {
    if (item == 'en') {
      setIsRTL(false)
    }
    else setIsRTL(true)

    i18next.changeLanguage(item);
    setMenuAnchor(null);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{isRTL ? 'پارس تکنولوژی سداد' : 'Pars Technology Sadad'}</title>
        <body className={isRTL ? 'rtl' : 'ltr'} />
      </Head>

      <div className="d-flex justify-content-end align-items-center language-select-root">
        <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
          <span><img src={`/images/${languageMap[selected]?.flag}.png`}></img></span>
          {languageMap[selected]?.label}
          <ArrowDropDown fontSize="small" />
        </Button>
        <Popover
          open={!!menuAnchor}
          anchorEl={menuAnchor}
          onClose={() => setMenuAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div>
            <List>
              {/* <ListSubheader>{t("select_language")}</ListSubheader> */}
              {Object.keys(languageMap)?.map((item) => (
                <ListItem
                  button
                  key={item}
                  onClick={() => {
                    changeLanguageHandler(item)
                  }}
                >
                  <span><img src={`/images/${languageMap[item]?.flag}.png`}></img></span>
                  {languageMap[item]?.label}
                </ListItem>
              ))}
            </List>
          </div>
        </Popover>
      </div>
    </>
  );
};
export default LanguageSelect;
