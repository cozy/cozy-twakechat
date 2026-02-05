export const buildAppUrl = async ({ orgId, domain }) => {
  return new URL(`https://chat.${orgId}.${domain}`)
}
