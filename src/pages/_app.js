import { DefaultSeo } from "next-seo";
import "../../styles/tailwind.css";
import { BASE_PATH, BRAND_LONG_DESC, BRAND_TITLE } from "../constant";

function MyApp({ Component, pageProps, router }) {
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
