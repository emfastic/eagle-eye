import { Html, Head, Main, NextScript } from "next/document";
import CustomHeader from "../../components/CustomHeader";

export default function Document() {
  return (
    <Html lang="en">
      <CustomHeader />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
