import React from 'react'

import { useExternalBridge } from 'cozy-external-bridge/container'
import flag from 'cozy-flags'

import { useLoginUrl } from '@/hooks/useLoginUrl'

const Wrapper = () => {
  const embeddedAppUrl = flag('chat.embedded-app-url')

  const url = useLoginUrl(embeddedAppUrl)

  if (!url) return null

  return <App url={url} />
}

const App = ({ url }) => {
  const { isReady, urlToLoad } = useExternalBridge(url)

  // We can not return null if bridge is not ready because to setup
  // the bridge we need iframe HTML element
  return (
    <iframe
      id="embeddedApp"
      src={isReady ? urlToLoad : null}
      allow="clipboard-read; clipboard-write"
    ></iframe>
  )
}

export default Wrapper
