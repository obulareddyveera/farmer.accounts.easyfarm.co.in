import Document, { Html, Head, Main, NextScript } from "next/document";
import * as  jquery from 'jquery/dist/jquery';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <React.Fragment>
            <title>Farmer Accounts</title>
          </React.Fragment>
        </Head>
        <body>
          <div id="root"></div>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
            crossOrigin="anonymous"
          ></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
