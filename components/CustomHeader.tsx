import Head from "next/head";

const CustomHeader = () => {
  return (
    <Head>
      <title>Eagle Eye</title>
      <meta
        name="description"
        content="Easily find Boston College courses and get notified when seats open."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔎</text></svg>"
      />
      <meta property="og:image" content="https://eaglesearch.org/image.svg" />
      <meta
        property="og:image:alt"
        content="Eagle Eye: Explore Courses and Get Notified (in a red gradient)"
      />
      <meta
        name="twitter:card"
        content="https://eaglesearch.org/twitter_card.svg"
      />
      <meta name="twitter:title" content="Eagle Eye" />
      <meta
        name="twitter:description"
        content="Easily find Boston College courses and get notified when seats open."
      />
    </Head>
  );
};

export default CustomHeader;
