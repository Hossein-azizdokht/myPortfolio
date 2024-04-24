import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="fixed top-0 bottom-0 right-0 left-0 z-[999] bg-[rgba(255,255,255,0.65)] flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  );
}
