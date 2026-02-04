import CozyClient, { Q } from 'cozy-client'

const DEFAULT_CACHE_TIMEOUT_QUERIES = 9 * 60 * 1000

export const buildInstanceSettingsQuery = () => ({
  definition: Q('io.cozy.settings').getById('instance'),
  options: {
    as: `io.cozy.settings/instance`,
    fetchPolicy: CozyClient.fetchPolicies.olderThan(
      DEFAULT_CACHE_TIMEOUT_QUERIES
    ),
    singleDocData: true
  }
})
