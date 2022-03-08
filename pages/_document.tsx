import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-50 text-slate-700 dark:bg-gray-900 dark:text-slate-50 transition-colors duration-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document