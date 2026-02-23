import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/gh/md8-habibullah/webapp-launcher@main/launcher.js"
            async
          ></script>
        </body>
      </Html>
    )
  }
}
