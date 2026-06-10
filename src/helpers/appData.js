import flag from 'cozy-flags'

export const buildAppUrl = async ({ orgId, domain }) => {
  if (flag('chat.new-backend-url')) {
    return new URL(`https://chat-${orgId}.tc-apps.${domain}`)
  } else {
    return new URL(`https://chat.${orgId}.${domain}`)
  }
}
