import { DefaultSeo } from "next-seo";
import {useRouter} from 'next/router';
import NProgress from "nprogress";
import { useEffect } from "react";
import 'nprogress/nprogress.css'
import "../../styles/tailwind.css";
import { BASE_PATH, BRAND_LONG_DESC, BRAND_TITLE } from "../constant";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (_, { shallow }) => {
      if(!shallow){
        NProgress.start();
        NProgress.configure({ showSpinner: false })
      }
    };

    const handleStop = (_, { shallow }) => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <DefaultSeo
        canonical={`${BASE_PATH}${router.asPath || "/"}`}
        description={BRAND_LONG_DESC}
        openGraph={{
          type: "website",
          title: BRAND_TITLE,
          description: BRAND_LONG_DESC,
          locale: "id_ID",
          site_name: BRAND_TITLE,
        }}
        title={BRAND_TITLE}
        titleTemplate={`%s | ${BRAND_TITLE}`}
        twitter={{
          handle: "@aguspray6",
          site: "@aguspray6",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
