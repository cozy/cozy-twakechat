export const buildApiLoginUrl = async ({ orgId, domain }) => {
  return new URL(`https://api-login-${orgId}.${domain}`)
}

export const fetchAuthStatus = async ({ apiLoginUrl }) => {
  const url = `${apiLoginUrl.origin}/api/auth/status`
  const statusResponse = await fetch(url, {
    credentials: 'include'
  })

  if (!statusResponse.ok) {
    throw new Error(`Failed auth/status fetch: ${statusResponse.status}`)
  }

  const statusData = await statusResponse.json()

  return !!(statusData.authenticated && statusData.homeserver)
}

export const fetchAuthLoginUrl = async ({ apiLoginUrl }) => {
  const url = `${apiLoginUrl.origin}/api/auth/login-url`
  const loginUrlResponse = await fetch(url, {
    credentials: 'include'
  })

  if (!loginUrlResponse.ok) {
    throw new Error(`Failed auth/login-url fetch: ${loginUrlResponse.status}`)
  }

  const loginData = await loginUrlResponse.json()

  return loginData.loginUrl
}
