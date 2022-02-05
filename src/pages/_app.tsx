import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-T2VVBQL'
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
