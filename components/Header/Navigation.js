import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "next-i18next";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineHome, HiOutlinePhoneIncoming } from "react-icons/hi";
import { Link as SLink } from "react-scroll";

import { SquareLoader } from "react-spinners";
import Link from "next/link";
import Loading from "../loading";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  //STATES------------------------------
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  let [color, setColor] = useState("#000");
  //FN----------------------------------
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showLanguageButton =
    router.pathname === "/news" ||
    router.pathname === "/tenders" ||
    router.pathname.includes("/customer-help") ||
    router.pathname.includes("/news/") ||
    router.pathname.includes("/pars-tech") ||
    router.pathname.includes("/tenders/") ||
    router.pathname.includes("/career")
      ? false
      : true;

  // USE EFFECT-------------------------
  useEffect(() => {
    // console.log(showLanguageButton);
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url !== router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    setShow(false);
    return () => {
      setShow(false);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [loading]);

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        expand="lg"
        className={loading ? "bg-slate-900" : ""}
      >
        <Container>
          {loading && (
            // <SquareLoader
            //   color={color}
            //   loading={loading}
            //   // cssOverride={override}
            //   size={50}
            //   aria-label="Loading Spinner"
            //   data-testid="loader"
            // />

            <div className="fixed top-0 bottom-0 right-0 left-0 z-[999] bg-[rgba(255,255,255,0.65)] flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}

          {/* <Loading /> */}

          {/* <Navbar.Brand
            href="/"
            className="ml-auto border-0 p-0 position-relative"
          /> */}
          {/* <Navbar.Brand
            href="/"
            className="ml-auto border-0 p-0 position-relative"
          >
            {loading && (
              <CircularProgress
                size={55}
                color="warning"
                className="pageLoader"
              />
            )}
            <Image
              className={`${loading ? "isload" : ""}`}
              src={`${
                router.locale === "en"
                  ? "/images/logo_en.svg"
                  : "/images/logo.svg"
              }`}
              width={200}
              height={48}
              alt="logo"
            />
          </Navbar.Brand> */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                {t("offcanvas.title")}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 align-items-center">
                <div>
                  <HiOutlineHome className="icon" />
                  <Link className="" href="/">
                    {t("header.navigation.home")}
                  </Link>
                </div>

                <div>
                  <HiOutlinePhoneIncoming className="icon" />
                  <SLink smooth={true} to="footer">
                    {t("header.navigation.contact.menuTitle")}
                  </SLink>
                </div>
                {/* <div>
                  <HiOutlinePhoneIncoming className="icon" />
                  <Link href="/articles">
                    {t("header.navigation.articles.menuTitle")}
                  </Link>
                </div> */}
              </Nav>
              {/* <LanguageSelect /> */}
              {showLanguageButton && (
                <Link
                  href={`/${router.pathname}`}
                  className="languageBtn"
                  locale={i18n.language === "fa" ? "en" : "fa"}
                >
                  {router.locale === "en" ? (
                    <>
                      <img src="/images/ir.png" width={18}></img>
                      <span>فا</span>
                    </>
                  ) : (
                    <>
                      <img src="/images/en.png" width={18}></img>
                      <span>EN</span>
                    </>
                  )}
                </Link>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <a activeclassname="active" className="left " href="tel:02188446699">
            <span className="numberTxt">
              {t("header.navigation.phoneNumber")}
            </span>
            <span className="phoneCall">
              <FiPhoneCall />
            </span>
          </a>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={handleShow}
          />
        </Container>
      </Navbar>
    </>
  );
}
