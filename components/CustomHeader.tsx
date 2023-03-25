import Head from "next/head";

const CustomHeader = () => {
  return (
    <Head>
      <title>Eagle Search</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jakeottiger" />
      <meta
        property="og:description"
        content="Easily find Boston College courses and get notified when seats open."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔎</text></svg>"
      />
      <meta
        property="og:image"
        content="https://www.eaglesearch.org/eaglesearch.png"
      />
      <meta
        name="twitter:image"
        content="https://www.eaglesearch.org/eaglesearch_twitter.png"
      />
      <meta
        property="og:image:alt"
        content="Eagle Search: Explore Courses and Get Notified (in a red gradient)"
      />
    </Head>
  );
};

export default CustomHeader;
