import { buildInstanceSettingsQuery } from '@/queries'

export const fetchInstanceOrgId = async client => {
  const instanceSettingsQuery = buildInstanceSettingsQuery()
  const { data: instanceSettings } = await client.query(
    instanceSettingsQuery.definition,
    instanceSettingsQuery.options
  )
  const { org_id: orgId } = instanceSettings

  if (!orgId) {
    throw new Error('No org_id found in instance settings')
  }

  return orgId
}

export const getInstanceDomain = async client => {
  const { domain } = await client.getInstanceOptions()

  if (!domain) {
    throw new Error('No domain found in instance options')
  }

  return domain.split('.').slice(1).join('.')
}
