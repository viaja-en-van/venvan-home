import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
type LayoutProps = {
  title?: string;
};
const layoutStyle = {
  display: "flex",
  flex: 1,
  "flex-direction": "column",
  border: "1px solid #DDD",
  backgroundColor: "white",
  color: "black",
  height: "100vh",
  fontFamily: "'Dosis', 'sans-serif'"
};


const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
      </link>
    </Head>
    <style jsx global>{`
      body {
        margin: 0px;
      }
      .container-children {
        height: calc(100% - 110px);
      }
    }
    `}</style>
    <Header></Header>
    <section className="container-children">
      {children}
    </section>
    <Footer></Footer>
  </div>
);
export default Layout;
