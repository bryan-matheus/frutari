import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import {CssBaseline} from '@geist-ui/core';
import {getCssText} from 'stitches.config';

/**
 * Document class.
 * @class
 * @extends {Document}
 * @see {@link https://nextjs.org/docs/api-reference/next/document}
 * @return {React.ReactElement} Document.
 */
class MyDocument extends Document {
  /**
   * Get initial props.
   *
   * @param {DocumentContext} ctx Context.
   * @return {Promise<DocumentInitialProps>} Initial props.
   */
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: <>
        {initialProps.styles}
        {styles}
      </>,
    };
  }

  /**
   * Render document.
   * @return {React.ReactElement} Document.
   * @see {@link https://nextjs.org/docs/api-reference/next/document}
   */
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{__html: getCssText()}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
