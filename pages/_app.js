import "bootstrap/dist/css/bootstrap.css";
import createWrapper from "next-redux-wrapper";

import wrapper from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
