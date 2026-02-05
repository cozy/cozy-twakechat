import { useState, useEffect } from 'react'

import { useClient } from 'cozy-client'
import Minilog from 'cozy-minilog'

import {
  buildApiLoginUrl,
  fetchAuthStatus,
  fetchAuthLoginUrl
} from '@/helpers/apiLogin'
import { buildAppUrl } from '@/helpers/appData'
import {
  getFreshLoginParams,
  isFreshLogin,
  cleanFreshLoginUrl,
  buildFreshLoginUrl
} from '@/helpers/freshLogin'
import { fetchInstanceOrgId, getInstanceDomain } from '@/helpers/instanceData'

const log = Minilog('👨‍💻 [Login wrapper]')

const getLoginUrl = async ({ appUrl, apiLoginUrl }) => {
  const freshLoginParams = getFreshLoginParams()
  log.info('Fresh login params', freshLoginParams)

  if (freshLoginParams.error) {
    throw new Error(
      `Error in fresh login params: ${freshLoginParams.error} ${freshLoginParams.errorDescription}`
    )
  }

  if (isFreshLogin({ freshLoginParams })) {
    log.info('🔵 Fresh login')
    cleanFreshLoginUrl()
    return buildFreshLoginUrl({ freshLoginParams, appUrl })
  } else {
    log.info('🔵 Not fresh login')
    const isAuthenticated = await fetchAuthStatus({ apiLoginUrl })
    if (isAuthenticated) {
      log.info('🔵 Authenticated')
      return appUrl.toString()
    } else {
      log.info('🔵 Not authenticated')
      window.location.href = await fetchAuthLoginUrl({ apiLoginUrl })
    }
  }
}

export const useLoginUrl = () => {
  const client = useClient()
  const [loginUrl, setLoginUrl] = useState()

  useEffect(() => {
    async function asyncGetLoginUrl() {
      const orgId = await fetchInstanceOrgId(client)
      log.info('Org ID:', orgId)

      const domain = await getInstanceDomain(client)
      log.info('Domain:', domain)

      const appUrl = await buildAppUrl({ orgId, domain })
      log.info('AppURL:', appUrl.toString())

      const apiLoginUrl = await buildApiLoginUrl({ orgId, domain })
      log.info('API login URL:', apiLoginUrl.toString())

      const url = await getLoginUrl({ appUrl, apiLoginUrl })

      setLoginUrl(url)
    }
    asyncGetLoginUrl()
  }, [])

  log.info('URL to load', loginUrl)

  return loginUrl
}
