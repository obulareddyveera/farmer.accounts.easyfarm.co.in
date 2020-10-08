import "bootstrap/dist/css/bootstrap.css";

import wrapper from "../store";
import "../styles/accordion.sidemenu.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
